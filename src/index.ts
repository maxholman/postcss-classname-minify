import postcss from 'postcss';
import parser from 'postcss-selector-parser';
import baseX from 'base-x';

interface PluginOpts {
  alphabet: string;
}

const defaultOptions: PluginOpts = {
  alphabet: '_zjqxkvbpgwyfmculihrsnoate',
};

const name = 'postcss-classname-minify';

export = postcss.plugin(name, (opts: Partial<PluginOpts> = {}) => {
  const { alphabet } = {
    ...defaultOptions,
    ...opts,
  };

  const base = baseX(alphabet);

  const ids = new Map<string, string>();

  function getNewClassName(oldClass: string): string {
    if (!ids.has(oldClass)) {
      const nextId = base.encode(Buffer.from([ids.size]));
      ids.set(oldClass, nextId);
    }
    return ids.get(oldClass);
  }

  const processor = parser((selectors) => {
    selectors.walkClasses((classNode) => {
      // eslint-disable-next-line no-param-reassign
      classNode.value = getNewClassName(classNode.value);
    });
  });

  return (root /* , result*/): void => {
    root.walkRules((ruleNode) => {
      return processor.process(ruleNode);
    });
  };
});

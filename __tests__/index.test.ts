import postcss from 'postcss';
import plugin from '../src/index';

async function run(input, output, opts): Promise<void> {
  const result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

test('does something', async () => {
  await run('.longStuff{ }.longStuff2{ }.longStuff{ }', '._{ }.z{ }._{ }', {});
});

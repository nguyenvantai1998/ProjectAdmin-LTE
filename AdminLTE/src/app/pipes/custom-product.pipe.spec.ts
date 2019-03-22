import { CustomProductPipe } from './custom-product.pipe';

describe('CustomProductPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomProductPipe();
    expect(pipe).toBeTruthy();
  });
});

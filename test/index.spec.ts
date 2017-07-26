describe('first test', () => {
  it('should work', () => {
    expect(true).toBeTruthy();
  });
});

describe('second test', () => {
  it('should also work', () => {
    expect(true).toBe(true);
  });
});

describe('third test', () => {
  it('should work as well', () => {
    expect(true).not.toBeFalsy(true);
  });
});

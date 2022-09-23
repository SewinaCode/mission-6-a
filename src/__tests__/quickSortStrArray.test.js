import quickSort from '../utils/quickSortStrArray';

describe('Quick sort Obj tests', () => {
  it('Obj Includes duplicate strings', () => {
    const sortThis = [{ name: 'Sony X' }, { name: 'Samsung Y' }, { name: 'Sony X' }, {name: 'Dell XX2' }];
    const sorted = [{ name: 'Dell XX2' }, { name: 'Samsung Y' }, { name: 'Sony X' }, {name:'Sony X'}];
    const key = "name"
    expect(quickSort(sortThis,key)).toStrictEqual(sorted);
  });

  it('Obj Only 1 ', () => {
    const sortThis = [{ name: 'Sony X' }];
    const sorted = [{ name: 'Sony X' }];
    const key = "name"
    expect(quickSort(sortThis, key)).toStrictEqual(sorted);
  });

  it('Obj Already in order', () => {
    const sortThis = [{ name: 'Dell XX2' }, { name: 'Samsung Y'}, { name: 'Sony X' }, { name: 'Sony X' }];
    const sorted = [{ name: 'Dell XX2' }, { name: 'Samsung Y' }, { name: 'Sony X' }, { name: 'Sony X' }];
    const key = "name"
    expect(quickSort(sortThis, key)).toStrictEqual(sorted);
  });

  it('Obj All on the left', () => {
    const sortThis = [{ name: 'Sony X' }, { name: 'Samsung Y' }, { name: 'Sony X' }, { name: 'Dell XX2' }];
    const sorted = [{ name: 'Dell XX2' }, { name: 'Samsung Y' }, { name: 'Sony X' }, { name: 'Sony X' }];
    const key = "name"
    expect(quickSort(sortThis, key)).toStrictEqual(sorted);
  });

  it('Obj All on the right', () => {
    const sortThis = [{ name: 'Dell XX2' }, { name: 'Sony X' }, { name: 'Samsung Y' }, { name: 'Sony X' }];
    const sorted = [{ name: 'Dell XX2' }, { name: 'Samsung Y' }, { name: 'Sony X' }, { name: 'Sony X' }];
    const key = "name"
    expect(quickSort(sortThis, key)).toStrictEqual(sorted);
  });
});

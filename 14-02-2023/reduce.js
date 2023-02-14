const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const addvalue = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${addvalue}`,
  );
  return addvalue;
}

array.reduce(reducer);

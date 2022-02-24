const waitMacroAsync = (ms = 0) => {
  return (
    new Promise(
      (resolve) => {
        return setTimeout(resolve, ms);
      }
    )
  );
};

const asyncFunc = async () => {
  await waitMacroAsync(1000);
  // console.log( async );
};

// asyncFunc();

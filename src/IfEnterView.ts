const callback = (entries: unknown): void => {
  Array.prototype.forEach.call(entries, (entry) => {
    if (entry.isIntersecting) {
      // `entry.target` 是 dom 元素
      // console.log(`${entry.target.id} is visible`);
    } else {
      // console.log(`${entry.target.id} is visible`);
    }
  });
};

const options = {
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);

/*
const btn = document.getElementById( btn );
const bottomBtn = document.getElementById( bottom-btn );
observer.observe(btn);
observer.observe(bottomBtn);
*/


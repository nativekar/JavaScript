/* Just like for Stacks, JavaScript offers Queue like functionality with its non-primitive datatype - an array, 
but an array cannot be used as a Queue for it allows for insertion, deletion at any given position. 
This here is an attempt to build a Queue by extending (or limiting) a JavaScript array.
*/

const createQueue = (maxLength = 15) => {
  const _queue = [];
  let _first = 0;
  let _last = maxLength - 1;

  const enqueue = (value) => {
    if (_last == maxLength) {
      return `Queue overflow`;
    } else {
      _queue[_first] = value;
      _first++;
    }
  };

  const dequeue = () => {
    const length = _queue.length - 1;
    if (length < 0) {
      return `Queue underflow`;
    } else {
      _queue.shift();
      _first = 0;
    }
  };

  const getFront = () => {
    if (_first < 0) return `Queue empty`;
    else return _queue[0];
  };

  const getRear = () => {
    const length = _queue.length - 1;
    if (_first < 0) return `Queue empty`;
    else return _queue[length];
  };

  const print = () => _queue;
  return { enqueue, dequeue, getFront, getRear, print };
};

const mockQueue = createQueue(8);
mockQueue.enqueue(3);
mockQueue.enqueue(6);
mockQueue.enqueue(9);
mockQueue.enqueue(12);
mockQueue.enqueue(15);
console.log(mockQueue.print());
mockQueue.dequeue();
mockQueue.dequeue();
console.log(mockQueue.print());
console.log(mockQueue.getFront());
console.log(mockQueue.getRear());

export default function guardrail(mathFunction) {
  const queue = [];
  let res;
  try {
    res = mathFunction();
  } catch (err) {
    res = `${err.name}: ${err.message}`;
  }
  queue.push(res);
  queue.push('Guardrail was processed');
  return queue;
}

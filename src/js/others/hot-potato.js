import Queue from '../data-structures/queue';

/**
 * 循环队列——模拟击鼓传花游戏
 * @param {*} elementList 人员列表
 * @param {*} num 传递次数
 */
export function hotPotato(elementList, num) {
    const queue = new Queue();
    const eliminatedList = []; // 存储被淘汰的人员
    // 依次入队elementList
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]);
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }

    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    };
}

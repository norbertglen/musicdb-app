function pad(val: number, size: number) {
    let num = val.toString()
    while (num.length < size) num = "0" + num
    return num;
}
const getDuration = (milliseconds: number) => {
    const minutes = Math.round(milliseconds / 60)
    const seconds = Math.round(milliseconds % 60)
    return `${pad(minutes, 2)}: ${pad(seconds, 2)}`
}

export default getDuration
export const generateColor = () => {
    const arr = '123456789ABCDEF';
    const hexCode = '#';

    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * arr.length);
        hexCode += arr[randomNumber];
    }

    console.log(hexCode)
}
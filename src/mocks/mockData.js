const products = [
    {
        id: "1",
        name: "Rig x6",
        price: 600000,
        img: "https://i.ibb.co/SNp4YXZ/RigCard.png",
        decription: "123 probando",
        stock: 10,
        category: "Rig",
    },
    {
        id: "2",
        name: "Rtx 3070",
        price: 130000,
        img: "https://i.ibb.co/TMf05TZ/Gpu.png",
        decription: "123 probando",
        stock: 15,
        category: "Hardware",
    },
    {
        id: "3",
        name: "Riser 009",
        price: 2000,
        img: "https://i.ibb.co/6HYj6WM/Riser.png",
        decription: "123 probando",
        stock: 50,
        category: "Hardware",
    },
    {
        id: "4",
        name: "Mother Asrock h510 BTC",
        price: 40000,
        img: "https://i.ibb.co/PxDHVZY/Mother-Card.png",
        decription: "123 probando",
        stock: 10,
        category: "Hardware",
    },
    {
        id: "5",
        name: "Intel Celeron G5905 S1151",
        price: 15000,
        img: "https://i.ibb.co/rcHjLr2/Procesador-Card.png",
        decription: "123 probando",
        stock: 10,
        category: "Hardware",
    },
    {
        id: "6",
        name: "Seasonic 850w Modular",
        price: 35000,
        img: "https://i.ibb.co/XbW1JFT/fuente2.png",
        decription: "123 probando",
        stock: 5,
        category: "Hardware",
    },
    {
        id: "7",
        name: "Safepal S1 Wallet Cripto",
        price: 25000,
        img: "https://i.ibb.co/L5JFLkR/wallet-Card.png",
        decription: "123 probando",
        stock: 5,
        category: "Wallet",
    },
    

];

export const data = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(products)
    },2000)
})

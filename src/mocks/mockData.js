const products = [
    {
        id: "1",
        name: "Rig x6",
        price: 600000,
        img: "https://i.ibb.co/SNp4YXZ/RigCard.png",
        description: "Rig minero x6 placas. 120 dólares de rentabilidad mensual, variable según la curva de dificultad de minería por época de minado.",
        stock: 10,
        category: "Rig",
    },
    {
        id: "2",
        name: "Rtx 3070",
        price: 130000,
        img: "https://i.ibb.co/TMf05TZ/Gpu.png",
        description: "El sistema de enfriamiento WINDFORCE 3X cuenta con ventiladores de cuchilla únicos de 3X80 mm, giro alternativo, 5 tubos de calor de cobre compuestos GPU de contacto directo, ventilador activo 3D y enfriamiento de pantalla, que en conjunto brindan una disipación de calor de alta eficiencia.",
        stock: 15,
        category: "Hardware",
    },
    {
        id: "3",
        name: "Riser V011 PRO",
        price: 2000,
        img: "https://i.ibb.co/6HYj6WM/Riser.png",
        description: "El riser V011 PRO de la marca Goldtech trae 10 capacitores, más práctico para alimentar, posee más estabilidad, más seguridad y máxima durabilidad. Indicadores LED en la plaqueta. El PCB es color negro, viene con cable adaptador de energía SATA a PCIE, y cable USB 3.0 de 60 cm color rojo. Este riser PCI-Express te permite usar las ranuras de tu placa madre que no podrías usar sin él, por lo tanto, es indispensable a la hora de hacer minería de criptomonedas.",
        stock: 50,
        category: "Hardware",
    },
    {
        id: "4",
        name: "Mother Asrock h510 BTC",
        price: 40000,
        img: "https://i.ibb.co/PxDHVZY/Mother-Card.png",
        description: "Esta placa base está diseñada específicamente para la minería, la revolucionaria criptomoneda digital que se puede utilizar en cualquier parte del mundo. Las abundantes ranuras PCIe integradas garantizan una rápida extracción de cifrado, mientras que los conectores de alimentación adicionales brindan una estabilidad avanzada del sistema durante la extracción.",
        stock: 10,
        category: "Hardware",
    },
    {
        id: "5",
        name: "Intel Celeron G5905 S1151",
        price: 15000,
        img: "https://i.ibb.co/rcHjLr2/Procesador-Card.png",
        description: "Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.",
        stock: 10,
        category: "Hardware",
    },
    {
        id: "6",
        name: "Seasonic 850w Modular",
        price: 35000,
        img: "https://i.ibb.co/XbW1JFT/fuente2.png",
        description: "Con la fuente de alimentación Sea Sonic Electronics SSR-850FX podrás asegurar la corriente continua y estable de tu Rig de minería cuidando a cada uno de los componentes.",
        stock: 5,
        category: "Hardware",
    },
    {
        id: "7",
        name: "Safepal S1 Wallet Cripto",
        price: 25000,
        img: "https://i.ibb.co/L5JFLkR/wallet-Card.png",
        description: "Esta es una billetera avanzada construida con arquitectura de seguridad líder en el mundo y una experiencia de usuario sin problemas. Puede proteger, administrar, enviar, comerciar e intercambiar crypto con él fácilmente. SafePal S1 hace que su vida criptográfica sea segura y sencilla.",
        stock: 5,
        category: "Wallet",
    },
    

];

export const data = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(products)
    },2000)
})

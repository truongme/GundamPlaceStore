import styles from './styles.module.scss'

const Order = () => {
    const listStatusOrder = ["Tất cả", "Chờ xác nhận", "Vận chuyển", "Đã hoàn thành", "Đã huỷ"]
    return (
        <div>
            <div className={styles.listStauts}>
                {listStatusOrder.map((item:string) => (
                    <div key={item} className={styles.itemStatus}>{item}</div>
                ))}
            </div>
        </div>
    )
}

export default Order;
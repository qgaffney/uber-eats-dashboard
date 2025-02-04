import orders from "/Users/q.gaffney/Desktop/CMSC300/Assignments/uber-eats-dashboard/src/assets/data/dashboard/orders.json";
import { Card, Table, Tag} from "antd";

const Orders = () => {
    const renderOrderStatus = (orderStatus) => {
        if (orderStatus === 'Accepted') {
            return <Tag color={'green'}></Tag>
        }
        if (orderStatus === 'Pending') {
            return <Tag color={'orange'}></Tag>
        }
        if (orderStatus === 'Rejected') {
            return <Tag color={'red'}></Tag>
        }
    };

    const tableColumns = [
        {
            title: 'Order ID',
            dataIndex: 'orderID',
            key: 'orderID'
        },
        {
            title: 'Delivery Address',
            dataIndex: 'deliveryAddress',
            key: 'deliveryAddress'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `${price} $`
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: renderOrderStatus
        }
    ]

    return (
        <Card title={'Orders'} style={{ margin: 20}}>
            <Table>
                dataSource={orders}
                columns={tableColumns}
            </Table>
        </Card>
    )
}
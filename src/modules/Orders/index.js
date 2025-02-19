import orders from 'src/assets/data/dashboard/orders.json';
import { Card, Table, Tag } from 'antd';

const Orders = () => {
    const renderOrderStatus = (orderStatus) => {
        if (orderStatus ==='Accepted') {
            return <Tag color={'green'}>{orderStatus}</Tag>
        }
        if (orderStatus ==='Pending') {
            return <Tag color={'orange'}>{orderStatus}</Tag>
        }
        if (orderStatus ==='Declined') {
            return <Tag color={'red'}>{orderStatus}</Tag>
        }
        console.log(orderStatus)
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
        },
    ];

    return (
        <Card title={'Orders'} style={{ margin: 20 }}>
            <Table
                dataSource={orders}
                columns={tableColumns}
                rowKey='orderID'
                onRow={(orderItem) => ({
                    onClick:() => console.log(orderItem)
                })}
            />
        </Card>
    )
};

export default Orders;
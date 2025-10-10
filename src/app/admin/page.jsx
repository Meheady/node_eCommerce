'use client';

import { Row, Col, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function Page() {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales Data',
            },
        },
    };

    return (
        <div>
            <Row>
                <Col md={3}>
                    <Card bg="primary" text="white" className="mb-3">
                        <Card.Header>Products</Card.Header>
                        <Card.Body>
                            <Card.Title>100</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card bg="success" text="white" className="mb-3">
                        <Card.Header>Categories</Card.Header>
                        <Card.Body>
                            <Card.Title>10</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card bg="danger" text="white" className="mb-3">
                        <Card.Header>Orders</Card.Header>
                        <Card.Body>
                            <Card.Title>50</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card bg="warning" text="white" className="mb-3">
                        <Card.Header>Users</Card.Header>
                        <Card.Body>
                            <Card.Title>5</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Header>Sales</Card.Header>
                        <Card.Body>
                            <Bar data={data} options={options} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
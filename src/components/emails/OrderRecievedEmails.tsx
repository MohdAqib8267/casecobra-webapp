
import { ShippingAddress } from "@prisma/client";
import { Html, Button, Head, Preview, Body, Container, Section, Img, Text, Heading, Row, Hr, Column } from "@react-email/components";
const OrderRecievedEmails = ({ shippingAddress, orderId, orderDate }: { shippingAddress: ShippingAddress, orderId: string, orderDate: string }) => {

    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://casecobra-webapp.vercel.app'

    console.log(shippingAddress, orderId, orderDate);

    return (
        <Html>
            <Head />
            <Preview>Your order summary and estimated delivery date</Preview>
            <Body style={{
                background: "#ffffff", fontFamily: 'Roboto,Oxygen-Sans,Ubuntu,sans-serif'
            }}>
                <Container style={{
                    margin: '10px auto',
                    width: '600px',
                    maxWidth: '100%',
                    border: '1px solid #E5E5E5',
                }}>
                    <Section style={{
                        padding: '40px 74px',
                        textAlign: 'center',
                    }}>
                        <Img
                            src={`${baseUrl}/snake-3.png`}
                            width='65'
                            height='73'
                            alt='delivery snake'
                            style={{ margin: 'auto' }}
                        />
                        <Heading style={{
                            fontSize: '32px',
                            lineHeight: '1.3',
                            fontWeight: '700',
                            textAlign: 'center',
                            letterSpacing: '-1px',
                        }}>Thank you for your order!</Heading>
                        <Text style={{
                            margin: '0',
                            lineHeight: '2', color: '#747474',
                            fontWeight: '500',
                        }}>
                            We're preparing everything for delivery and will notify you once
                            your package has been shipped. Delivery usually takes 2 days.
                        </Text>
                        <Text style={{
                            margin: '0',
                            lineHeight: '2', color: '#747474',
                            fontWeight: '500', marginTop: 24
                        }}>
                            If you have any questions regarding your order, please feel free
                            to contact us with your order number and we're here to help.
                        </Text>
                    </Section>
                    <Hr style={{
                        borderColor: '#E5E5E5',
                        margin: '0',
                    }} />
                    <Section style={{
                        paddingLeft: '40px',
                        paddingRight: '40px', paddingTop: '22px',
                        paddingBottom: '22px',
                    }}>
                        <Text style={{
                            fontSize: '15px',
                            fontWeight: 'bold', margin: '0',
                            lineHeight: '2',
                        }}>Shipping to: {shippingAddress.name}</Text>
                        <Text style={{
                            color: '#747474',
                            fontWeight: '500', margin: '0',
                            lineHeight: '2', fontSize: 14
                        }}>
                            {shippingAddress.street}, {shippingAddress.city},{' '}
                            {shippingAddress.state} {shippingAddress.postalCode}
                        </Text>
                    </Section>
                    <Hr style={{
                        borderColor: '#E5E5E5',
                        margin: '0',
                    }} />
                    <Section style={{
                        paddingLeft: '40px',
                        paddingRight: '40px', paddingTop: '22px',
                        paddingBottom: '22px',
                    }}>
                        <Row style={{ display: 'inline-flex gap-16', marginBottom: 40 }}>
                            <Column style={{ width: 170 }}>
                                <Text style={{
                                    margin: '0',
                                    lineHeight: '2',
                                    fontWeight: 'bold'
                                }}>Order Number</Text>
                                <Text style={{
                                    margin: '12px 0 0 0',
                                    fontWeight: 500,
                                    lineHeight: '1.4',
                                    color: '#6F6F6F',
                                }}>{orderId}</Text>
                            </Column>
                            <Column style={{ marginLeft: 20 }}>
                                <Text style={{
                                    margin: '0',
                                    lineHeight: '2',
                                    fontWeight: 'bold'
                                }}>Order Date</Text>
                                <Text style={{
                                    margin: '12px 0 0 0',
                                    fontWeight: 500,
                                    lineHeight: '1.4',
                                    color: '#6F6F6F',
                                }}>{orderDate}</Text>
                            </Column>
                        </Row>
                    </Section>

                    <Hr style={{
                        borderColor: '#E5E5E5',
                        margin: '0',
                    }} />
                    <Section style={{
                        paddingTop: '22px',
                        paddingBottom: '22px'
                    }}>
                        <Row>
                            <Text
                                style={{
                                    margin: '0',
                                    color: '#AFAFAF',
                                    fontSize: '13px',
                                    textAlign: 'center',
                                    paddingTop: 30,
                                    paddingBottom: 30,
                                }}>
                                Please contact us if you have any questions. (If you reply to
                                this email, we won't be able to see it.)
                            </Text>
                        </Row>
                        <Row>
                            <Text style={{
                                margin: '0',
                                color: '#AFAFAF',
                                fontSize: '13px',
                                textAlign: 'center',
                            }}>
                                © CaseCobra, Inc. All Rights Reserved.
                            </Text>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html >
    )
}
export default OrderRecievedEmails
'use client'

import { Prisma } from '@prisma/client'
import { useEffect, useState } from 'react'
import { Spin, Button, Form, InputNumber, Typography, Row, Col } from 'antd'
import { CreditCardOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PaymentPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: item,
    isLoading: itemLoading,
    refetch: refetchItem,
  } = Api.item.findUnique.useQuery({
    where: { id: params.itemId },
    include: { user: true },
  })

  const { mutateAsync: createTransaction } =
    Api.transaction.create.useMutation()

  const handlePayment = async (values: { amount: number }) => {
    try {
      await createTransaction({
        data: {
          amount: values.amount,
          paymentMethod: 'Stripe',
          dateCompleted: new Date().toISOString(),
          buyerId: user.id,
          sellerId: item.user.id,
          itemId: item.id,
        },
      })
      enqueueSnackbar('Payment successful!', { variant: 'success' })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar('Payment failed. Please try again.', { variant: 'error' })
    }
  }

  if (itemLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Make a Payment</Title>
      <Text>Complete your transaction securely using Stripe.</Text>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Form onFinish={handlePayment} layout="vertical">
            <Form.Item
              label="Amount"
              name="amount"
              rules={[{ required: true, message: 'Please enter the amount' }]}
            >
              <InputNumber min={1} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<CreditCardOutlined />}
                block
              >
                Pay with Stripe
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}

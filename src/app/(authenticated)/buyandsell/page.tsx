'use client'

import { Prisma } from '@prisma/client'
import {
  Typography,
  Row,
  Col,
  Card,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Spin,
} from 'antd'
import { PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function BuySellPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: items,
    isLoading: isLoadingItems,
    refetch: refetchItems,
  } = Api.item.findMany.useQuery({ include: { user: true, images: true } })
  const { mutateAsync: createItem } = Api.item.create.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const [form] = Form.useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCreateItem = async (values: any) => {
    try {
      setIsSubmitting(true)
      const imageUrl = values.image
        ? await upload({ file: values.image })
        : null
      await createItem({
        data: {
          title: values.title,
          description: values.description,
          category: values.category,
          type: values.type,
          price: values.price,
          barterItem: values.barterItem,
          datePosted: dayjs().toISOString(),
          userId: user.id,
          images: imageUrl
            ? { create: [{ imageUrl: imageUrl.url }] }
            : undefined,
        },
      })
      enqueueSnackbar('Item created successfully', { variant: 'success' })
      form.resetFields()
      refetchItems()
    } catch (error) {
      enqueueSnackbar('Failed to create item', { variant: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Buy and Sell</Title>
      <Paragraph>
        As a buyer, browse items for sale. As a seller, list your items for
        sale.
      </Paragraph>

      <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <Title level={3}>Items for Sale</Title>
          {isLoadingItems ? (
            <Spin />
          ) : (
            <Row gutter={[16, 16]}>
              {items?.map(item => (
                <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                  <Card
                    cover={
                      <img
                        alt={item.title}
                        src={item.images?.[0]?.imageUrl || '/placeholder.png'}
                      />
                    }
                    actions={[
                      <Button
                        type="primary"
                        icon={<ShoppingCartOutlined />}
                        onClick={() => router.push(`/item/${item.id}`)}
                      >
                        Buy
                      </Button>,
                    ]}
                  >
                    <Card.Meta
                      title={item.title}
                      description={`$${item.price?.toString() || 'N/A'}`}
                    />
                    <Text type="secondary">Seller: {item.user?.name}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>

        {user && (
          <Col span={24}>
            <Title level={3}>List an Item</Title>
            <Form form={form} layout="vertical" onFinish={handleCreateItem}>
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: 'Please enter the title' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="description" label="Description">
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                name="category"
                label="Category"
                rules={[
                  { required: true, message: 'Please select a category' },
                ]}
              >
                <Select>
                  <Option value="electronics">Electronics</Option>
                  <Option value="furniture">Furniture</Option>
                  <Option value="clothing">Clothing</Option>
                  <Option value="books">Books</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: 'Please select a type' }]}
              >
                <Select>
                  <Option value="sale">Sale</Option>
                  <Option value="barter">Barter</Option>
                </Select>
              </Form.Item>
              <Form.Item name="price" label="Price">
                <InputNumber min={0} />
              </Form.Item>
              <Form.Item name="barterItem" label="Barter Item">
                <Input />
              </Form.Item>
              <Form.Item name="image" label="Image">
                <Input type="file" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<PlusOutlined />}
                  loading={isSubmitting}
                >
                  List Item
                </Button>
              </Form.Item>
            </Form>
          </Col>
        )}
      </Row>
    </PageLayout>
  )
}

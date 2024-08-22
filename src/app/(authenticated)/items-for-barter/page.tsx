'use client'

import { Prisma } from '@prisma/client'
import { useState } from 'react'
import {
  Typography,
  Row,
  Col,
  Card,
  Button,
  Form,
  Input,
  Select,
  InputNumber,
  Spin,
} from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ItemsforBarterTradePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: items,
    isLoading,
    refetch,
  } = Api.item.findMany.useQuery({ include: { user: true, images: true } })

  const { mutateAsync: createItem } = Api.item.create.useMutation()

  const [form] = Form.useForm()

  const handleCreateItem = async (values: Prisma.ItemCreateInput) => {
    try {
      await createItem({ data: values })
      enqueueSnackbar('Item created successfully', { variant: 'success' })
      refetch()
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to create item', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Items for Barter/Trade</Title>
      <Paragraph>
        Browse and list items available for barter or trade.
      </Paragraph>

      <Row justify="center" gutter={[16, 16]}>
        <Col span={24}>
          <Form form={form} layout="vertical" onFinish={handleCreateItem}>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please enter the title' }]}
            >
              <Input placeholder="Enter item title" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea rows={4} placeholder="Enter item description" />
            </Form.Item>
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true, message: 'Please select a category' }]}
            >
              <Select placeholder="Select category">
                <Option value="electronics">Electronics</Option>
                <Option value="furniture">Furniture</Option>
                <Option value="clothing">Clothing</Option>
                <Option value="books">Books</Option>
                <Option value="others">Others</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="type"
              label="Type"
              rules={[{ required: true, message: 'Please select a type' }]}
            >
              <Select placeholder="Select type">
                <Option value="barter">Barter</Option>
                <Option value="trade">Trade</Option>
              </Select>
            </Form.Item>
            <Form.Item name="price" label="Price">
              <InputNumber
                min={0}
                placeholder="Enter price (if any)"
                style={{ width: '100%' }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                List Item
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <Row justify="center" gutter={[16, 16]}>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          items?.map(item => (
            <Col key={item.id} span={24} md={12} lg={8}>
              <Card
                title={item.title}
                extra={
                  <Button
                    type="link"
                    onClick={() => router.push(`/items/${item.id}`)}
                  >
                    View
                  </Button>
                }
                cover={
                  item.images?.[0] ? (
                    <img alt={item.title} src={item.images[0].imageUrl} />
                  ) : null
                }
              >
                <Paragraph>{item.description}</Paragraph>
                <Text strong>Category: </Text>
                <Text>{item.category}</Text>
                <br />
                <Text strong>Type: </Text>
                <Text>{item.type}</Text>
                <br />
                <Text strong>Posted by: </Text>
                <Text>{item.user?.name}</Text>
                <br />
                <Text strong>Date Posted: </Text>
                <Text>{dayjs(item.datePosted).format('MMMM D, YYYY')}</Text>
                <br />
                {item.price && (
                  <>
                    <Text strong>Price: </Text>
                    <Text>{item.price.toString()}</Text>
                  </>
                )}
              </Card>
            </Col>
          ))
        )}
      </Row>
    </PageLayout>
  )
}

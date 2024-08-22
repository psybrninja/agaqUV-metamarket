'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Form, Input, Button, Radio, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function SellersPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const { mutateAsync: createItem } = Api.item.create.useMutation()

  const handleSubmit = async (values: any) => {
    try {
      const newItem = {
        title: values.title,
        description: values.description,
        category: values.category,
        type: values.type,
        price: values.price,
        barterItem: values.barterItem,
        datePosted: dayjs().toISOString(),
        userId: user.id,
      }
      await createItem({ data: newItem })
      enqueueSnackbar('Item listed successfully!', { variant: 'success' })
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to list item. Please try again.', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>List Your Item</Title>
      <Text>
        As a seller, you can choose to list items for sale or for barter/trade.
      </Text>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ marginTop: '20px' }}
      >
        <Form.Item
          name="title"
          label="Item Title"
          rules={[{ required: true, message: 'Please enter the item title' }]}
        >
          <Input placeholder="Enter item title" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: 'Please enter the item description' },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Enter item description" />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[
            { required: true, message: 'Please enter the item category' },
          ]}
        >
          <Input placeholder="Enter item category" />
        </Form.Item>

        <Form.Item
          name="type"
          label="Listing Type"
          rules={[
            { required: true, message: 'Please select the listing type' },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value="sale">For Sale</Radio>
              <Radio value="barter">For Barter/Trade</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please enter the price' }]}
        >
          <InputNumber
            min={0}
            style={{ width: '100%' }}
            placeholder="Enter price"
          />
        </Form.Item>

        <Form.Item name="barterItem" label="Barter Item (if applicable)">
          <Input placeholder="Enter item for barter" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
            List Item
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}

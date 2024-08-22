'use client'

import { Prisma } from '@prisma/client'
import { useState } from 'react'
import { Typography, Radio, Row, Col, Card, Spin } from 'antd'
import { ShopOutlined, SwapOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function BuyersPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [itemType, setItemType] = useState<string>('sale')

  const {
    data: items,
    isLoading,
    refetch,
  } = Api.item.findMany.useQuery({
    where: { type: itemType },
    include: { images: true, user: true },
  })

  const handleItemTypeChange = (e: any) => {
    setItemType(e.target.value)
    refetch()
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Browse Items</Title>
      <Text>Select the type of items you are interested in:</Text>
      <Radio.Group
        onChange={handleItemTypeChange}
        value={itemType}
        style={{ marginBottom: 20 }}
      >
        <Radio.Button value="sale">
          <ShopOutlined /> For Sale
        </Radio.Button>
        <Radio.Button value="barter">
          <SwapOutlined /> For Barter/Trade
        </Radio.Button>
      </Radio.Group>
      <Row gutter={[16, 16]} justify="center">
        {isLoading ? (
          <Spin size="large" />
        ) : (
          items?.map(item => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  item.images?.length > 0 ? (
                    <img alt={item.title} src={item.images[0].imageUrl} />
                  ) : null
                }
              >
                <Card.Meta
                  title={item.title}
                  description={`Posted by: ${item.user?.name}`}
                />
              </Card>
            </Col>
          ))
        )}
      </Row>
    </PageLayout>
  )
}

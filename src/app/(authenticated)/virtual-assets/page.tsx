'use client'

import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { ShoppingCartOutlined, SwapOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function VirtualAssetsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: items,
    isLoading,
    refetch,
  } = Api.item.findMany.useQuery({
    include: {
      images: true,
      user: true,
    },
  })

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Virtual Assets</Title>
      <Paragraph>Browse virtual assets available for sale or trade.</Paragraph>

      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {items?.map(item => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  item.images?.[0]?.imageUrl ? (
                    <img alt={item.title} src={item.images[0].imageUrl} />
                  ) : (
                    <div style={{ height: 200, backgroundColor: '#f0f0f0' }} />
                  )
                }
                actions={[
                  <ShoppingCartOutlined
                    key="buy"
                    onClick={() => router.push(`/payment?itemId=${item.id}`)}
                  />,
                  <SwapOutlined
                    key="trade"
                    onClick={() =>
                      router.push(`/items-for-barter?itemId=${item.id}`)
                    }
                  />,
                ]}
              >
                <Card.Meta
                  title={item.title}
                  description={
                    <>
                      <Text>{item.description}</Text>
                      <br />
                      <Text type="secondary">Category: {item.category}</Text>
                      <br />
                      <Text type="secondary">Type: {item.type}</Text>
                      <br />
                      <Text type="secondary">
                        Price: {item.price?.toString() || 'N/A'}
                      </Text>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}

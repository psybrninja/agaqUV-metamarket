'use client'

import { Prisma } from '@prisma/client'
import { Typography, Card, Row, Col, Spin } from 'antd'
import { ShoppingCartOutlined, SwapOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function DigitalDownloadsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: items,
    isLoading,
    refetch,
  } = Api.item.findMany.useQuery({
    where: { type: 'digital' },
    include: { images: true, user: true },
  })

  if (isLoading) {
    return <Spin tip="Loading..." />
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Digital Downloads</Title>
      <Paragraph>
        Browse digital downloads available for sale or trade.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        {items?.map(item => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.images?.[0]?.imageUrl} />}
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
                    <Text type="secondary">
                      Price: ${item.price?.toString()}
                    </Text>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}

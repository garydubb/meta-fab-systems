"use client";

import { Typography, Row, Col, Card, Form, Input, Button, Flex, Grid } from "antd";
import { SectionBadge, Section, Container } from "@/components/atoms";
import { ContactInfoItem } from "@/components/molecules";
import { contact } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const { useBreakpoint } = Grid;

export default function ContactSection() {
  const screens = useBreakpoint();

  return (
    <Section id="contact" bg="light" style={{ paddingBlock: screens.sm ? 96 : 64 }}>
      <Container>
        <Row gutter={[48, 48]}>
          <Col xs={24} lg={12}>
            <Flex vertical gap="small">
              <SectionBadge>Get In Touch</SectionBadge>
              <Title level={2} style={{ color: colors.black }}>
                Request a Quote
              </Title>
              <Paragraph style={{ maxWidth: 448, color: colors.neutral600 }}>
                Tell us about your project and we&apos;ll get back to you with
                a plan and pricing.
              </Paragraph>
            </Flex>

            <Flex vertical gap="large" style={{ marginTop: 32 }}>
              <ContactInfoItem
                icon="Phone"
                lines={[contact.officePhone]}
                label={contact.officePhoneLabel}
              />
              <ContactInfoItem
                icon="MessageCircle"
                lines={[contact.personalPhone]}
                label={contact.personalPhoneLabel}
              />
              <ContactInfoItem icon="MapPin" lines={contact.address} />
            </Flex>
          </Col>

          <Col xs={24} lg={12}>
            <Card>
              <Form layout="vertical" requiredMark={false}>
                <Flex vertical gap="middle">
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: "Please enter your name" }]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: "Please enter your phone number" }]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Enter a valid email address" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item label="Project Details" name="message">
                    <TextArea rows={4} />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" block>
                      Send Request
                    </Button>
                  </Form.Item>
                </Flex>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

interface Props {
  userName: string;
  userEmail: string;
  userPhoneNumber: string;
  dangerStatus: string;
  address: string;
  date: string;
  contactAgreement: string;
  id: string;
}

function GetHelpRequest({
  userName,
  userEmail,
  userPhoneNumber,
  dangerStatus,
  address,
  date,
  contactAgreement,
  id,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview> New Get Help Request Received</Preview>
      <Tailwind>
        <Body className="bg-lightThemeColor">
          <Container>
            <Section className="bg-white border border-themeColor my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                New Get Help Request Received
              </Heading>
              <Text>
                A new Get Help request has been submitted on the gender-based
                violence website. The details of the request are as follows:
              </Text>
              <Text>Name of the User: {userName}</Text>
              <Text>User's Email: {userEmail}</Text>
              <Text>User's Phone Number: {userPhoneNumber}</Text>
              <Text>Immediate danger status: {dangerStatus}</Text>
              <Text>Address: {address}</Text>
              <Text>Date: {date}</Text>
              <Text>Agreed to be Contacted: {contactAgreement}</Text>
              <Text>
                <Link
                  href={`${process.env.URL}/admin/get-help/${id}/view`}
                  className="text-blue-600 underline text-sm"
                >
                  View Full Information
                </Link>
              </Text>

              <Text>Best regards,</Text>
              <Text>GBV Software</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default GetHelpRequest;

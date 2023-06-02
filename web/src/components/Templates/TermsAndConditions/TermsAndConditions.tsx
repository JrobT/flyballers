import { back } from '@redwoodjs/router'

import Body from 'src/components/Atoms/Body'
import Button from 'src/components/Atoms/Button'
import { Header } from 'src/components/Atoms/Header'
import NumberedList from 'src/components/Atoms/NumberedList'

const TermsAndConditions = () => {
  return (
    <>
      <div className="flex w-full flex-row">
        <Header color="text-white" styles="mb-4">
          Flyballers - Terms & Conditions
        </Header>
        <Button content="Back" onClick={() => back()} styles="mr-0" />
      </div>

      <Body styles="text-primary-100">
        Welcome to Flyballers! These Terms and Conditions (&quot;Terms&quot;)
        govern your use of the Flyballers website (&quot;the Site&quot;) as a
        user (&quot;User&quot;). By accessing or using the Site, you agree to be
        bound by these Terms. If you do not agree to these Terms, please refrain
        from using the Site.
      </Body>

      <NumberedList styles="text-primary-100">
        <NumberedList.Item>
          <Body styles="font-semibold text-white">Accuracy of Information</Body>
          <NumberedList styles="text-primary-100">
            <NumberedList.Item>
              The Site may provide information related to Flyball competitions,
              training, and related content. While we strive to provide accurate
              and up-to-date information, we cannot guarantee the accuracy,
              completeness, or reliability of any information on the Site. The
              information provided on the Site is for general informational
              purposes only.
            </NumberedList.Item>
            <NumberedList.Item>
              Users acknowledge and understand that the information on the Site
              may not be correct, current, or complete. It is the responsibility
              of the User to independently verify any information obtained from
              the Site before relying on it.
            </NumberedList.Item>
          </NumberedList>
        </NumberedList.Item>

        <NumberedList.Item>
          <Body styles="font-semibold text-white">
            Maintenance and Availability
          </Body>
          <NumberedList styles="text-primary-100">
            <NumberedList.Item>
              Flyballers makes no representation or warranty regarding the
              ongoing maintenance, availability, or uninterrupted operation of
              the Site. We may, at our discretion, suspend, terminate, modify,
              or discontinue any part of the Site without prior notice or
              liability.
            </NumberedList.Item>
            <NumberedList.Item>
              Users understand and acknowledge that access to the Site may be
              temporarily restricted or unavailable due to technical issues,
              maintenance, or other factors beyond our control. We do not
              guarantee continuous access to the Site or its functionality.
            </NumberedList.Item>
          </NumberedList>
        </NumberedList.Item>

        <NumberedList.Item>
          <Body styles="font-semibold text-white">
            Data Security and Privacy
          </Body>
          <NumberedList styles="text-primary-100">
            <NumberedList.Item>
              Flyballers takes the privacy and security of User data seriously.
              However, Users understand and acknowledge that we cannot guarantee
              the security of data transmitted over the internet or stored on
              the Site.
            </NumberedList.Item>
            <NumberedList.Item>
              Users are responsible for ensuring the confidentiality of their
              account credentials, including usernames and passwords. Any
              activity occurring under a User&apos;s account is their sole
              responsibility.
            </NumberedList.Item>
            <NumberedList.Item>
              Users agree that the data they provide to the Site may not be
              private and may be accessible to other Users or third parties.
              Flyballers shall not be held responsible for any unauthorized
              access to or use of User data.
            </NumberedList.Item>
          </NumberedList>
        </NumberedList.Item>

        <NumberedList.Item>
          <Body styles="font-semibold text-white">Limitation of Liability</Body>
          <NumberedList styles="text-primary-100">
            <NumberedList.Item>
              To the maximum extent permitted by applicable law, Flyballers, its
              officers, directors, employees, affiliates, and agents shall not
              be liable for any direct, indirect, incidental, consequential, or
              special damages arising out of or in connection with the use or
              inability to use the Site or reliance on any information provided
              on the Site.
            </NumberedList.Item>
          </NumberedList>
        </NumberedList.Item>

        <NumberedList.Item>
          <Body styles="font-semibold text-white">Indemnification</Body>
          <NumberedList styles="text-primary-100">
            <NumberedList.Item>
              Users agree to indemnify and hold Flyballers, its officers,
              directors, employees, affiliates, and agents harmless from any
              claims, losses, damages, liabilities, costs, or expenses arising
              out of or relating to the User&apos;s use of the Site, violation
              of these Terms, or infringement of any rights of a third party.
            </NumberedList.Item>
          </NumberedList>
        </NumberedList.Item>

        <NumberedList.Item>
          <Body styles="font-semibold text-white">Amendment of Terms</Body>
          <NumberedList styles="text-primary-100">
            <NumberedList.Item>
              Flyballers reserves the right to modify or update these Terms at
              any time. Any changes will be effective upon posting the revised
              Terms on the Site. Users are encouraged to review the Terms
              periodically.
            </NumberedList.Item>
            <NumberedList.Item>
              Continued use of the Site after the posting of any changes
              constitutes acceptance of those changes.
            </NumberedList.Item>
          </NumberedList>
        </NumberedList.Item>

        <NumberedList.Item>
          <Body styles="font-semibold text-white">Governing Law</Body>
          <NumberedList styles="text-primary-100">
            <NumberedList.Item>
              These Terms shall be governed by and construed in accordance with
              the laws of the United Kingdom, without regard to its conflict of
              laws principles.
            </NumberedList.Item>
          </NumberedList>
        </NumberedList.Item>
      </NumberedList>

      <Body styles="text-primary-100">
        By using the Flyballers website, you agree to abide by these Terms and
        Conditions.
      </Body>
    </>
  )
}

export default TermsAndConditions

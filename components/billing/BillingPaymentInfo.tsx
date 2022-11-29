import Image from "next/image";
import { mastercardWhite, paypal, wallet } from "../../src/assets/icons";
import Box from "../Box";
import GradientLine from "../GradientLine";
import Text from "../Text";

const BillingPaymentInfo = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-[2]">
        <div className="w-full min-auto bg-chart-visit-gradient">
          <div
            className="flex w-full min-h-[200px] p-4 bg-radar-2
            bg-no-repeat bg-cover"
          >
            <div className="flex flex-col justify-between w-full">
              <div className="flex justify-between">
                <Text variant="head2" className="text-[#fff]">
                  Purity UI
                </Text>
                <Image
                  alt="card-logo"
                  src={mastercardWhite.src}
                  width={mastercardWhite.width}
                  height={mastercardWhite.height}
                />
              </div>

              <div className="flex flex-col">
                <Text variant="head2" className="text-[#fff]">
                  7812 2312 3234 XXXX
                </Text>

                <div className="flex pt-2">
                  <div className="flex flex-col">
                    <Text variant="caption" className="text-[#fff] text-[10px]">
                      VALID THRU
                    </Text>
                    <span className="text-[#fff] text-[14px]">05/24</span>
                  </div>
                  <div className="flex flex-col pl-8">
                    <Text variant="caption" className="text-[#fff] text-[10px]">
                      CVV
                    </Text>
                    <span className="text-[#fff] text-[14px]">09X</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1] ml-0 sm:ml-4 mt-4 sm:mt-0 flex">
        <Box className="flex flex-col items-center text-center justify-center">
          <Box className="bg-secondary w-auto">
            <Image
              alt="salary"
              src={wallet.src}
              width={26}
              height={26}
              className="h-[26px]"
            />
          </Box>
          <Text variant="head2" className="mt-2">
            Salary
          </Text>
          <Text variant="caption" className="text-xs font-bold">
            Belong Interactive
          </Text>
          <GradientLine />
          <Text variant="head2">+$2000</Text>
        </Box>
      </div>
      <div className="flex-[1] ml-0 sm:ml-4 mt-4 sm:mt-0 flex">
        <Box className="flex flex-col items-center text-center justify-center">
          <Box className="bg-secondary w-auto">
            <Image
              alt="salary"
              src={paypal.src}
              width={26}
              height={26}
              className="h-[26px]"
            />
          </Box>
          <Text variant="head2" className="mt-2">
            Paypal
          </Text>
          <Text variant="caption" className="text-xs font-bold">
            Freelance Payment
          </Text>
          <GradientLine />
          <Text variant="head2">+$455</Text>
        </Box>
      </div>
    </div>
  );
};

export default BillingPaymentInfo;

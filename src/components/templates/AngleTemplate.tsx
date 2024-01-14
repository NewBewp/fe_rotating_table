import { Tabs } from "antd"
import { AngleHistory, AngleInput } from "./angle"

export const AngleTemplate = () => {
  return (
    <div className="">
      <Tabs
        tabPosition="left"
        items={[
          {
            key: "Angle",
            label: "Góc độ",
            children: <AngleInput />
          },
          {
            key: "AngleHistory",
            label: "Lịch sử góc",
            children: <AngleHistory />,
          },
        ]}
      />
    </div>
  )
}

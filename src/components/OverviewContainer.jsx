import data from "../../data/data.json"
import {OverviewCard, OverviewTodayCard } from "./OverviewCard"

const convertNumberToK = (number) => {
  if(number >= 10000) {
    number = number / 1000
    return `${number}K`
  }
  return number
}

export const OverviewContainer = () => {

  return (
    <section className="max-w-[1440px] place-content-center flex flex-wrap gap-[30px] absolute top-[191px] left-0 right-0 mx-auto">{
        data.overview.map(object => 
            <OverviewCard 
            key={object.id}
            user={object.user}
            audienceType={object.audienceType}
            audience={convertNumberToK(object.audience)}
            network={object.network}
            isUp={object.isUp}
            today={object.today}
            />
        )
    }
    </section>
  )
}

export const OverviewTodayContainer = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-8">Overview Today</h2>
      <div className="flex flex-wrap">
        {
          data['overview-today'].map(object =>
            <OverviewTodayCard 
              key={object.id}
              network={object.network}
              statsType={object.statsType}
              stats={convertNumberToK(object.stats)}
              porcentage={object.porcentage}
              isUp={object.isUp}
            / >
          )
        }
      </div>
    </section>
  )
}
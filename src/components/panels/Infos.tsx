import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="How to play" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Guess the <Worldle /> in 6 guesses.
        </div>
        <div>Each guess must be a place we've visited together. </div>
        <div>
          After each guess, you will be given the distance, direction and
          proximity from your guess and the target location.
          If the distance is less than 10km it will be shown in metres.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Examples</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Cambridge",
                direction: "SE",
                distance: 1_022_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your guess <span className="uppercase font-bold">Cambridge</span> is{" "}
            {formatDistance(1022000, settingsData.distanceUnit)} away from the
            target location. The target is in the South-West direction
            and you have a only 49% of proximity because it&apos;s quite far
            away!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Lake Iseo",
                direction: "SW",
                distance: 2_653,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your second guess{" "}
            <span className="uppercase font-bold">Lake Iseo</span> is getting
            closer! {formatDistance(2653, settingsData.distanceUnit)} away in the
            South-East direction. Proximity is 99% so you must be very close!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Tavernola Bergamasca",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Next guess, <span className="uppercase font-bold">Tavernola Bergamasca</span>,
            is the right location to guess! Congrats! 🎉
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        A new <Worldle /> will be available every day!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">About locations</div>
        <div>
          For some cities there will be many locations within it. To make things easier you can search by city. So for example if you start typing <span className="uppercase font-bold">London</span>,
          the suggestions will contain <span className="uppercase font-bold">122 Dalyell Road</span> and <span className="uppercase font-bold">47 Corrance Road</span> etc.
        </div>
        <div>
          The city itself may also be a potential guess, in these cases the centre of the city according to google maps is used. Distances are then taken relative to this.
          For example <span className="uppercase font-bold">Medwards</span> is {formatDistance(1_186, settingsData.distanceUnit)} NW of <span className="uppercase font-bold">Cambridge</span>.
        </div>
        <div>
         I have tried to keep places guessable and so have included some of the most memorable spots. I'm bound to have missed some, so if your guess isn't accepted but you think it should be included tell me and I will add - it might then be the correct answer in the future!
        </div>
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Made by Matt Bradley
        </div>
        <div>
        Want to support?{" "}
        <a
          className="underline"
          href="https://monzo.me/matthewbradley/1.00?d=Thanks%20for%20being%20such%20a%20great%20guy"
          target="_blank"
          rel="noopener"
        >
          Monzo me a quid.
        </a>
        </div>
      </div>
    </Panel>
  );
}


// <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
//   <Worldle /> has been <span className="font-bold">heavily</span> inspired
//   by{" "}
//   <a
//     className="underline"
//     href="https://www.powerlanguage.co.uk/wordle/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Worldle
//   </a>{" "}
//   created by{" "}
//   <a
//     className="underline"
//     href="https://twitter.com/powerlanguish"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Josh Wardle (@powerlanguish)
//   </a>
//   .
// </div>

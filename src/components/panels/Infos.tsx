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
        <div>Each guess must be a valid date location or place we've visited. </div>
        <div>
          After each guess, you will have the distance, the direction and the
          proximity from your guess and the target location.
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
            target location, the target location is in the South-West direction
            and you have a only 95% of proximity because it&apos;s quite far
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
            closer! {formatDistance(2653, settingsData.distanceUnit)} away,
            South-East direction and 100%!
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
          For some cities we will have many special locations within it.
          In these cases the cities have been included as well as the locations within them, in this case the centre of the city will be used as according to Google maps.
          Distances and directions to actual locations within the city would then be shown relative to this.
        </div>
        <div>
          For example <span className="uppercase font-bold">Medwards</span> is {formatDistance(1_186, settingsData.distanceUnit)} NW of <span className="uppercase font-bold">Cambridge</span>.
        </div>
        <div>
         I have tried to keep places guessable and so have included some of the most memorable spots. I'm bound to have missed some, so if your guess isn't accepted but you think it should be included tell me and I will add!
        </div>
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Made by Matt Bradley
        </div>
        <div>
          Want to support? Monzo me a tenner.
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

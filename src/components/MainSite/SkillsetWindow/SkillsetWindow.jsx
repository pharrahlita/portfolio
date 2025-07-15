import "./Skillset.css";
import WindowFrame from "../WindowFrame/WindowFrame";

const Skillset = () => {
  return (
    <div className="skillset-wrapper">
      <WindowFrame title="skillset.txt">
        <div className="skillset-window">
          <pre className="ascii-creature">
{String.raw`
         .-"      "-.
       .'              '.
      /                  \
     ;                    ;
     |                    |
     ;     .--------.     ;
      \   '          '   /
       '.              .'
         '-._______.-'

         (   o   o   )
         |    ^     |
         |  '-' '-' |
         |    ___   |
         \__________/
`}
          </pre>

          <div className="skillset-columns">
            <div className="branch">
              <h3>+ Frontend Branch 🌱</h3>
              <p>– HTML / CSS / Sass / JavaScript / React</p>
            </div>

            <div className="branch">
              <h3>+ Design Branch 🎨</h3>
              <p>
                – Figma / Canva / Aseprite / Adobe Suite<br />
                [Photoshop, Xd, Premiere Pro, After Effects, Illustrator]
              </p>
            </div>

            <div className="branch">
              <h3>+ Productivity Branch 📑</h3>
              <p>– Trello / Notion / GitHub / Git / VSCode</p>
            </div>

            <div className="branch">
              <h3>+ Side Quests 🕹</h3>
              <p>– Pixel Art / Streaming / Video Game Modding</p>
            </div>
          </div>
        </div>
      </WindowFrame>
    </div>
  );
};

export default Skillset;

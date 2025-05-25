import PEImg from '../assets/images/PE.png';
import PPImg from '../assets/images/PP.jpg';
import NylonImg from '../assets/images/Nylon.jpg';
import PETImg from '../assets/images/PET.png';
import PCImg from '../assets/images/PC.png';

import pePfd from '../assets/images/pe-pfd.png';
import petPfd from '../assets/images/pet-pfd.png'
import pcPfd from '../assets/images/pc-pfd.png'
import nylonPfd from '../assets/images/nylon-pfd.png'
import ppPfd from '../assets/images/pp-pfd.png'





 const chemicals = [
    {
      name: "Polyethylene (PE)",
      img: PEImg,
      type: "Free Radical",
      prod: "110 Mt",
      cond: "70–90°C, 1–2 MPa",
      description:
        "Polyethylene (PE), light, versatile synthetic resin made from the polymerization of ethylene. Polyethylene is a member of the important family of polyolefin resins. It is the most widely used plastic in the world, being made into products ranging from clear food wrap and shopping bags to detergent bottles and automobile fuel tanks. It can also be slit or spun into synthetic fibres or modified to take on the elastic properties of a rubber.",
      pfdDiagram: pePfd,
       links: [
      "https://doi.org/10.1016/B978-0-323-35824-8.00010-4",
      "https://doi.org/10.1016/j.ecoenv.2022.113933",
      "https://doi.org/10.1016/S0142-9418(01)00214-6"
      ]
    },
    {
      name: "PET",
      img: PETImg,
      type: "Condensation",
      prod: "79 Mt",
      cond: "50–70°C, 1–3 atm",
      description:
        "Polyethylene terephthalate (PET) belongs to the family of polyesters. It has a semi-crystalline form when stable. It is recyclable and shows resistance to impact, moisture, alcohols, and solvents. It is among those plastics which are an important part of your everyday life.",
      pfdDiagram: petPfd,
      links: [
      "https://pubs.acs.org/doi/10.1021/acscatal.3c02922",
      "https://pubs.acs.org/doi/10.1021/acs.biochem.3c00554"
      ]
      },
    {
      name: "Polycarbonate (PC)",
      img: PCImg,
      type: "Free Radical",
      prod: "110 Mt",
      cond: "70–90°C, 1–2 MPa",
      description:
        "Polycarbonates are strong, stiff, hard, tough, transparent engineering thermoplastics that can maintain rigidity up to 140°C and toughness down to -20°C or special grades even lower. The material is amorphous (thereby displaying excellent mechanical properties and high dimensional stability), is thermally resistant up to 135°C and rated as slow burning. Special flame retardant grades exist which pass several severe flammability tests.",
      pfdDiagram: pcPfd,
       links: [
      "https://doi.org/10.1002/pol.20220118",
      "https://doi.org/10.3390/en15103686"
      ]
    
      },
    {
      name: "Nylon-6,6",
      img: NylonImg,
      type: "Condensation",
      prod: "1.4 Mt",
      cond: "80–300°C",
      description:
        "Nylon 66 (loosely written nylon 6-6, nylon 6/6, nylon 6,6, or nylon 6:6) is a type of polyamide or nylon. It, and nylon 6, are the two most common for textile and plastic industries. Nylon 66 is made of two monomers each containing six carbon atoms, hexamethylenediamine and adipic acid, which give nylon 66 its name.[1] Aside from its superior physical characteristics, nylon 66 is attractive because its precursors are inexpensive.",
      pfdDiagram: nylonPfd,
       links: [
      "https://doi.org/10.1002/app.1319",
      "https://doi.org/10.1016/S0032-3861(98)00079-2"
      ]
      },
    {
      name: "Polypropylene (PP)",
      img: PPImg,
      type: "Ziegler–Natta",
      prod: "79 Mt",
      cond: "50–70°C, 1–3 atm",
      description:
        "Polypropylene (PP) is a thermoplastic linear hydrocarbon polymer resin that is a bit rigid and resistant to chemicals and electricity at high temperatures. Since PP is a thermoplastic, it can be soft at high temperatures and hardens at low temperatures.",
      pfdDiagram: ppPfd,
      links: [
      "https://doi.org/10.1002/polc.5070710106",
      "https://doi.org/10.1016/S0141-3910(03)00179-4"
      ]
      },
  ];

  export default chemicals;
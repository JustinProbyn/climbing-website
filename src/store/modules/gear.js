const gear = {
  state: {
    itemsInStock: {
      shoes: [
        {
          id: 1,
          itemName: "La Sportiva Genius",
          itemPrice: 3295,
          itemPicture: require("../../../public/img/gear/climbingShoes/Screenshot_2019-03-04_at_13.19.50__40000.1551698403.png")
        },
        {
          id: 2,
          itemName: "La Sportiva Futura",
          itemPrice: 2900,
          itemPicture: require("../../../public/img/gear/climbingShoes/La_Sportiva_Futura__40135.1529410367.jpg")
        },
        {
          id: 3,
          itemName: "Ocun Pearl LU",
          itemPrice: 1650,
          itemPicture: require("../../../public/img/gear/climbingShoes/ocun-pearl__24530.1525952260.jpg")
        },
        {
          id: 4,
          itemName: "Ocun Oxi QC",
          itemPrice: 1995,
          itemPicture: require("../../../public/img/gear/climbingShoes/03755_Oxi_QC__70621.1529478170.jpg")
        },
        {
          id: 5,
          itemName: "Evolv Shakra",
          itemPrice: 2150,
          itemPicture: require("../../../public/img/gear/climbingShoes/evolv-shakra-side__24728.1529488995.jpg")
        }
      ],
      harnesses: [
        {
          id: 1,
          itemName: "Beal Aero Team IV",
          itemPrice: 750,
          itemPicture: require("../../../public/img/gear/harnesses/Beal_aero_Team_IV__21376.1533881605.jpg")
        },
        {
          id: 2,
          itemName: "Black Diamond Momentum Harness Men's",
          itemPrice: 995,
          itemPicture: require("../../../public/img/gear/harnesses/bd-Momentum-Mens-verde__30440.1551162981.jpg")
        },
        {
          id: 3,
          itemName: "Black Diamond Momentum Harness Women's",
          itemPrice: 995,
          itemPicture: require("../../../public/img/gear/harnesses/BD_Momentum-Womens_Stone-blue__49691.1531916675.jpg")
        },
        {
          id: 4,
          itemName: "DMM Mithril Harness",
          itemPrice: 1295,
          itemPicture: require("../../../public/img/gear/harnesses/Mithril__23042.1584618312.jpg")
        },
        {
          id: 5,
          itemName: "Petzl Corax",
          itemPrice: 1170,
          itemPicture: require("../../../public/img/gear/harnesses/petzl-CORAX-mythylblue__15120.1551704828.jpg")
        }
      ],
      belayDevices: [
        {
          id: 1,
          itemName: "Black Diamond ATC Pilot",
          itemPrice: 795,
          itemPicture: require("../../../public/img/gear/BDs/BD-pilot-2__53236.1531741336.jpg")
        },
        {
          id: 2,
          itemName: "Black Diamond ATC XP",
          itemPrice: 395,
          itemPicture: require("../../../public/img/gear/BDs/BD-ATC-XP-black__00533.1531741679.jpg")
        },
        {
          id: 3,
          itemName: "Edelrid Giga Jul",
          itemPrice: 1250,
          itemPicture: require("../../../public/img/gear/BDs/73742_663a__60848.1571671926.jpg")
        },
        {
          id: 4,
          itemName: "DMM Mantis Belay Device",
          itemPrice: 325,
          itemPicture: require("../../../public/img/gear/BDs/c63_12112_a1165or-mantis-belay-device-orange__37123.1561551150.jpg")
        },
        {
          id: 5,
          itemName: "DMM Pivot Belay Device",
          itemPrice: 600,
          itemPicture: require("../../../public/img/gear/BDs/dmm-PIVOT-RED__41155.1551953037.jpg")
        }
      ],
      chalk: [
        {
          id: 1,
          itemName: "Black Diamond Black Gold 200g Chalk",
          itemPrice: 350,
          itemPicture: require("../../../public/img/gear/chalks/200g_Black_Gold__79117.1578569281.jpg")
        },
        {
          id: 2,
          itemName: "Black Diamond Black Gold 30g",
          itemPrice: 70,
          itemPicture: require("../../../public/img/gear/chalks/Black_Gold_30g__10984.1578496796.jpg")
        },
        {
          id: 3,
          itemName: "Evolv Chalk",
          itemPrice: 120,
          itemPicture: require("../../../public/img/gear/chalks/chalk_100g__03539.1529480141.jpg")
        },
        {
          id: 4,
          itemName: "Metolius Chalk Block (57g)",
          itemPrice: 30,
          itemPicture: require("../../../public/img/gear/chalks/Block-Chalk__62853.1529673074.jpg")
        },
        {
          id: 5,
          itemName: "Metolius ECO Chalk Ball",
          itemPrice: 110,
          itemPicture: require("../../../public/img/gear/chalks/Eco_chalk_ball__50742.1529675932.jpg")
        }
      ],
      chalkBags: [
        {
          id: 1,
          itemName: "Beal Maxi Cocoon Chalk Bag",
          itemPrice: 395,
          itemPicture: require("../../../public/img/gear/chalkBags/Maxi_4__51975.1569407938.jpg")
        },
        {
          id: 2,
          itemName: "Black Diamond Creek Chalk Bag",
          itemPrice: 495,
          itemPicture: require("../../../public/img/gear/chalkBags/630153_Creek_Chalk_Bag_web__59173.1553518136.jpg")
        },
        {
          id: 3,
          itemName: "Black Diamond Freerider Chalk Bag",
          itemPrice: 425,
          itemPicture: require("../../../public/img/gear/chalkBags/Honnold_Signature_ChalkBag__04786.1553518328.jpg")
        },
        {
          id: 4,
          itemName: "DMM Trad Chalk bag",
          itemPrice: 445,
          itemPicture: require("../../../public/img/gear/chalkBags/dmm-trad-RED__42760.1553865391.jpg")
        },
        {
          id: 5,
          itemName: "Evolv Andes Chalk Bag",
          itemPrice: 390,
          itemPicture: require("../../../public/img/gear/chalkBags/evolv-andes-emerald__29047.1562672292.jpg")
        }
      ],
      helmets: [
        {
          id: 1,
          itemName: "Black Diamond Half Dome Men's Helmet",
          itemPrice: 1050,
          itemPicture: require("../../../public/img/gear/helmets/bd-hd-hel-slate__34774.1561642997.jpg")
        },
        {
          id: 2,
          itemName: "Black Diamond Half Dome Women's Helmet",
          itemPrice: 1050,
          itemPicture: require("../../../public/img/gear/helmets/bd-HalfDome-Womens-caspian-1__05231.1533655545.jpg")
        },
        {
          id: 3,
          itemName: "Black Diamond Vector Helmet",
          itemPrice: 1750,
          itemPicture: require("../../../public/img/gear/helmets/BD-vecotr-helmet-blue__62946.1570615860.jpg")
        },
        {
          id: 4,
          itemName: "Mammut Rock Rider Helmet",
          itemPrice: 885,
          itemPicture: require("../../../public/img/gear/helmets/2030-00131-00315_main_50461__24024.1565097281.jpg")
        },
        {
          id: 5,
          itemName: "Petzl Boreo Helmet",
          itemPrice: 1170,
          itemPicture: require("../../../public/img/gear/helmets/petzl-BOREO-view-1-fuschia__97605.1531840035.jpg")
        }
      ],
      ropes: [
        {
          id: 1,
          itemName: "Beal Antidote 10.2mm x 60m",
          itemPrice: 2300,
          itemPicture: require("../../../public/img/gear/ropes/beal-antidote-blue__74743.1534508332.png")
        },
        {
          id: 2,
          itemName: "Beal Cobra 8.6mm",
          itemPrice: 2695,
          itemPicture: require("../../../public/img/gear/ropes/beal-cobra-green__62711.1534421904.png")
        },
        {
          id: 3,
          itemName: "Beal Diablo 9.8mm",
          itemPrice: 2995,
          itemPicture: require("../../../public/img/gear/ropes/beal-diablo-red-1__33088.1574086088.png")
        },
        {
          id: 4,
          itemName: "Beal Joker 9.1mm",
          itemPrice: 3595,
          itemPicture: require("../../../public/img/gear/ropes/BL__12361.1550060605.jpg")
        },
        {
          id: 5,
          itemName: "Beal Stinger 9.4mm",
          itemPrice: 3495,
          itemPicture: require("../../../public/img/gear/ropes/beal-stinger-anis__63887.1574074523.png")
        }
      ],
      ropeBags: [
        {
          id: 1,
          itemName: "Black Diamond Stone Duffel 42",
          itemPrice: 1495,
          itemPicture: require("../../../public/img/gear/rope-bags/bd-stone-42-nickel-1__97065.1561548951.jpg")
        },
        {
          id: 2,
          itemName: "Black Diamond Super Chute Rope Bag",
          itemPrice: 995,
          itemPicture: require("../../../public/img/gear/rope-bags/bd-Superchute-closed__37628.1533652572.jpg")
        },
        {
          id: 3,
          itemName: "DMM Classic Rope Bag",
          itemPrice: 1050,
          itemPicture: require("../../../public/img/gear/rope-bags/DMM_CLassic__40396.1529574084.jpg")
        },
        {
          id: 4,
          itemName: "DMM Flight Rope Bag",
          itemPrice: 2350,
          itemPicture: require("../../../public/img/gear/rope-bags/c63_12090_flight-sport-climbing-rope-bag-grey__14107.1547298226.jpg")
        },
        {
          id: 5,
          itemName: "DMM Pitcher Rope Bag",
          itemPrice: 800,
          itemPicture: require("../../../public/img/gear/rope-bags/DMM_Pitcher_Rope_Bag__99682.1529659287.jpg")
        }
      ],
      quickdraws: [
        {
          id: 1,
          itemName: "Black Diamond Freewire Quickdraw",
          itemPrice: 345,
          itemPicture: require("../../../public/img/gear/quickdraws/Freewire_12__14183.1578574366.jpg")
        },
        {
          id: 2,
          itemName: "DMM Alpha Trad Quickdraw",
          itemPrice: 370,
          itemPicture: require("../../../public/img/gear/quickdraws/dmm-alphatrad-qd__70192.1560167274.jpg")
        },
        {
          id: 3,
          itemName: "Mammut Bionic Express Quickdraw",
          itemPrice: 295,
          itemPicture: require("../../../public/img/gear/quickdraws/mammut-bionic-express-qd__00640.1530685822.jpg")
        },
        {
          id: 4,
          itemName: "Metolius FS Mini II Long Draw",
          itemPrice: 258,
          itemPicture: require("../../../public/img/gear/quickdraws/metolius-fs-mini-longdraw-20__15932.1529677701.jpg")
        },
        {
          id: 5,
          itemName: "Ocun Falcon Quickdraw 5 Pack",
          itemPrice: 1400,
          itemPicture: require("../../../public/img/gear/quickdraws/Ocun-Falcon-QD-Zoom-PA-15-22-blue-5-pack__02060.1574157896.jpg")
        }
      ],
      carabiners: [
        {
          id: 1,
          itemName: "Black Diamond Gridlock Magnetron Carabiner",
          itemPrice: 650,
          itemPicture: require("../../../public/img/gear/carabiners/bd-_GridLock_Magnetron_Carabiner__51369.1533288829.jpg")
        },
        {
          id: 2,
          itemName: "Black Diamond Neutrino Rackpack",
          itemPrice: 725,
          itemPicture: require("../../../public/img/gear/carabiners/bd-NeutrinoRackpack_web__72617.1533296483.jpg")
        },
        {
          id: 3,
          itemName: "DMM Ceros Twislock Carabiner",
          itemPrice: 385,
          itemPicture: require("../../../public/img/gear/carabiners/DMM-ceros-kwiklock-belay-carabiner__20614.1559739661.jpg")
        },
        {
          id: 4,
          itemName: "DMM Revolver Wire Gate Carabiner",
          itemPrice: 550,
          itemPicture: require("../../../public/img/gear/carabiners/Revolver_wire__85500.1529660326.jpg")
        },
        {
          id: 5,
          itemName: "DMM Spectre 2 - 5 Pack",
          itemPrice: 635,
          itemPicture: require("../../../public/img/gear/carabiners/DMM_Spector_rack_pack__22524.1529663029.jpg")
        }
      ],
      SnCs: [
        {
          id: 1,
          itemName: "Black Diamond Nylon Daisy Chain",
          itemPrice: 375,
          itemPicture: require("../../../public/img/gear/SnCs/390012_daisychain_140cm_rd_web__14894.1571837151.jpg")
        },
        {
          id: 2,
          itemName: "Black Diamond Dynex Runners",
          itemPrice: 245,
          itemPicture: require("../../../public/img/gear/SnCs/bd-DYNEX-slings-120cm__65220.1571916180.jpg")
        },
        {
          id: 3,
          itemName: "Beal Accessory Cord",
          itemPrice: 5,
          itemPicture: require("../../../public/img/gear/SnCs/beal-2-3mm-accessory-cord__55481.1533881198.jpg")
        },
        {
          id: 4,
          itemName: "Ocun Multipoint Belay Sling",
          itemPrice: 450,
          itemPicture: require("../../../public/img/gear/SnCs/526b__70072.1537373840.jpg")
        },
        {
          id: 5,
          itemName: "Evolv Ringer Boulder Pad",
          itemPrice: 1060,
          itemPicture: require("../../../public/img/gear/SnCs/068w0000003wLFZAA2__31656.1551874979.jpg")
        }
      ],
      crashPads: [
        {
          id: 1,
          itemName: "Evolv Ringer Boulder Pad",
          itemPrice: 1060,
          itemPicture: require("../../../public/img/gear/crashPads/Evolv_Ringer_Crash_Pad_Lime__71238.1529487913.jpg")
        },
        {
          id: 2,
          itemName: "Beal Double Air Boulder pad",
          itemPrice: 4750,
          itemPicture: require("../../../public/img/gear/crashPads/Beal-double-Air-BoulderPad-red__34274.1534330481.png")
        },
        {
          id: 3,
          itemName: "Edelrid Mantle Crash Pad",
          itemPrice: 4125,
          itemPicture: require("../../../public/img/gear/crashPads/__23919.1572874068.jpg")
        },
        {
          id: 4,
          itemName: "Ocun Dominator Boulder Pad",
          itemPrice: 5425,
          itemPicture: require("../../../public/img/gear/crashPads/dominator__28788.1529421510.jpg")
        },
        {
          id: 5,
          itemName: "Ocun Sundance Boulder Pad",
          itemPrice: 3225,
          itemPicture: require("../../../public/img/gear/crashPads/02473_Paddy_sundance__76325.1529422106.jpg")
        }
      ]
    }
  },
  mutations: {
    // Sets ItemsInStock

    setGearshop(state, products) {
      state.itemsInStock.BDs = products;
    }
  },
  actions: {
    sendToGearshop({ commit }, products) {
      commit("setGearshop", products);
    }
  },
  getters: {
    getGearshopData(state) {
      return state.itemsInStock;
    }
  }
};

export default gear;

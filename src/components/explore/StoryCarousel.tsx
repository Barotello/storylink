import React from "react";
import { Link } from "react-router-dom";

const StoryCarousel = () => {
  return (
    <div className="flex w-full overflow-x-auto px-4 py-3 hide-scrollbar">
      <div className="flex min-h-min flex-row items-start justify-start gap-4">
        <div className="flex flex-col justify-center items-center gap-2 w-20 text-center flex-shrink-0">
          <div className="relative">
            <div
              className="w-16 h-16 bg-center bg-no-repeat aspect-square bg-cover rounded-full border-2 border-dashed border-primary-app/50"
              data-alt="A placeholder icon to add a new story."
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCL4R9Kw0MTtJwg49FK_2xUBoylBK56d2UeTOrD-GlsEcjaZfPWDr-Lm9xhLZ1uMyoxFkmB--aWNngT32OAdzl2FG4o1gWI4kH3Vyit-__A_QgFfnzAuyhGs7eZ5_jURIy6SuIo7NPZzBp5mP9WzXI611e_RqnYxKHz38I5ha3phLSREQa43oQycQZcrPjMTVh-JLgLO3zUNx1iUrg5dQLEghNV2XplGrXwXtVPgKxjIgrRISKd4-Ro-tUBbbvgMu8hgBDSkKoxUBY")`,
              }}
            ></div>
            <div className="absolute bottom-0 right-0 bg-primary-app text-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-background">
              <span className="material-symbols-outlined !text-base">add</span>
            </div>
          </div>
          <p className="text-foreground text-[13px] font-medium leading-normal">Hikayen</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-20 text-center flex-shrink-0">
          <div
            className="w-16 h-16 bg-center bg-no-repeat aspect-square bg-cover rounded-full p-0.5 border-2 border-primary-app"
            data-alt="Profile picture of Elif"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAS-xAz124ZlwfYPlsOoSUpQwtPDjGBWkcqShn-8NdYwPmHQptDUCAEkztFQY8Je_1E5uGtIt0KosyVQgfrB1Cv4rYUYZWdvvNs0qJGvv4M5Z7gDsB4i0gnzBVT4DEyt5m6PsBFpXuawUjuQv8kTG5Dwwd2wfHLJU99qWF19lbGhKTLfC4Aap2dat3oHE2w6oWZ8ZKvmMiEflDnpUaE-vAdKrhqak2-RCVCHpVUoLbytr_Y1cUcxHFdMhi3N5ZkhDLQGVIDiqGhBd8")`,
            }}
          ></div>
          <p className="text-foreground text-[13px] font-normal leading-normal">Elif</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-20 text-center flex-shrink-0">
          <div
            className="w-16 h-16 bg-center bg-no-repeat aspect-square bg-cover rounded-full p-0.5 border-2 border-primary-app"
            data-alt="Profile picture of Ahmet"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOc5Yfxqo3wYYXlWgR2-_Ej_ang-wqVl58_H3v-CQc2epBrpV_mbrfGyuB9p6G24FW2THpbfraODO8rS5yC3RvzLIOPjuh_ZySpmx7pcas4QyC2xaULRppadBn3gBQ0vT7uUJhMeYSqLZ-NsTp-ay9I0cBuXtbV_2Uy-bzI_d7Jm_ERFnKTnxQKd4fYha5A88-V-5g2XT9v5FE9wZaT-nrFYSCW75tHAX88mMtre4-7Ofm3GDGSz6u-De0PYugq7y9NSzNk_xrlnY")`,
            }}
          ></div>
          <p className="text-foreground text-[13px] font-normal leading-normal">Ahmet</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-20 text-center flex-shrink-0">
          <div
            className="w-16 h-16 bg-center bg-no-repeat aspect-square bg-cover rounded-full p-0.5 border-2 border-primary-app"
            data-alt="Profile picture of Zeynep"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNsFsiBhIqO2YTCcfwKwLVF6MjuVAkumdiei0g0P_MLJmEpW3WexMJs7oAXJMCGyfZu5_5BHn4OiQU7D9MiWo8IQgHLcTGzLnbLwfKrlYaEdyoancsCUvr-luz1rYX1_jMwmbVychHj0ucxSWPToJdNh1p7nj94Ft3wQxDHviY7TGGcY3NGY7v_MMRJPl0ZS9BMuXB2zRvNzSphl1ZIV79387E7zgoFJNMdTzJpy4TqeCFItcUOs9pErLGyye_ptrenv-ZIWkApYA")`,
            }}
          ></div>
          <p className="text-foreground text-[13px] font-normal leading-normal">Zeynep</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-20 text-center flex-shrink-0">
          <div
            className="w-16 h-16 bg-center bg-no-repeat aspect-square bg-cover rounded-full p-0.5 border-2 border-primary-app"
            data-alt="Profile picture of Can"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGaHrgsvMLytwykwOqzEndqIoQqUF7aYFUrfzxRS9i2Y0H8GjtXOQLrfKUcKTmhCldWFInOWGXMivWWht2ayMb3cDjxA0Mw6_zITr7ydqdhaMIJbmX8F7k1dVOBevxP6_2w0iEalZ1aLJ4prGCEa-_JtsGAsD9zctiIiiVjt9PndK8ojzDPrbTT2KR_DqGL1Qh110qVwOdT7Zz0MbC2SxBTLmnhLWi-oBL6O2lHKxWNljCIjucQv-lwp3XfUl1rS08v73UbkA_yBo")`,
            }}
          ></div>
          <p className="text-foreground text-[13px] font-normal leading-normal">Can</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-20 text-center flex-shrink-0">
          <div
            className="w-16 h-16 bg-center bg-no-repeat aspect-square bg-cover rounded-full p-0.5 border-2 border-primary-app"
            data-alt="Profile picture of Selin"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaqBd6jXepivXnKcUJxwiJcrjB7o2FDGPCBDXeNYjpu9RR99oUVjFjFc9apUfhcwo-v21CMrlWgghBHpFxymwFKRoGex02mt6VSUmIVSngqPNiveXBxQkOxWpH4lIEf2SMe4b6yZVCDrpGc8zGl7mauugZRfzu82rbv0Rv69cWznRY3gVXX6gU3kXs96vFc5hpj1EMWGe2JuEYDBeAKOMc8ncxQo0wtHgnEad2m_FfhMccR86wHSVQtdfkbo6qGubsI6-wmagFnuw")`,
            }}
          ></div>
          <p className="text-foreground text-[13px] font-normal leading-normal">Selin</p>
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default StoryCarousel;
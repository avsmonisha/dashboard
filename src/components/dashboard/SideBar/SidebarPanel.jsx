import { useLocation, Link } from "react-router-dom";
import { navigationItems } from "@/data/dashboardData";

const SidebarPanel = () => {
  const location = useLocation();

  return (
    <aside
      className="
        w-[293.13px]
        min-h-screen
        flex flex-col
        bg-white dark:bg-[#0F172A]
        shadow-[0_4px_4px_rgba(0,0,0,0.5)]
      "
    >
      {/* LOGO */}
      <div className="flex items-center h-[50px] pl-[28.51px] pt-[6px] gap-[10px] shrink-0">
        {/* BLUE BOX */}
        <div
          className="
            w-[37.64px] h-[39px]
            rounded-[5px]
            bg-[#2563EB]
            shadow-[0_2px_4px_#3B82F6]
            flex items-center justify-center
          "
        >
          <span className="font-poppins font-bold text-[18px] text-white">
            N
          </span>
        </div>

        {/* NEXUS */}
        <span
          className="
            font-poppins font-semibold text-[20px]
            text-slate-900 dark:text-[#F1F5F9]
          "
        >
          NEXUS
        </span>
      </div>

      {/* NAV (scrollable) */}
      <nav className="flex-1 overflow-y-auto mt-6 px-3 pb-6">
        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg
                    text-slate-600 dark:text-[#CBD5E1]
                    hover:bg-slate-100 dark:hover:bg-[#1E293B]
                    transition-colors
                    ${
                      isActive
                        ? "bg-slate-100 text-slate-900 dark:bg-[#1E293B] dark:text-white"
                        : ""
                    }
                  `}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarPanel;

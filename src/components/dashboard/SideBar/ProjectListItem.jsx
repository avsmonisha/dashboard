import { Folder } from "lucide-react";

const ProjectListItem = ({ name, status }) => {
  const statusColors = {
    active: "bg-stat-green",
    pending: "bg-stat-orange",
    completed: "bg-stat-blue",
  };

  return (
    <div className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-sidebar-accent transition-colors cursor-pointer">
      <Folder className="w-4 h-4 text-muted-foreground" />
      <span className="flex-1 text-sm text-sidebar-foreground truncate">{name}</span>
      <span className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
    </div>
  );
};

export default ProjectListItem;

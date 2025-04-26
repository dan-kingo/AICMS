import { useEffect, useState } from "react";
import { BellIcon, CheckCheckIcon } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import useNotificationStore from "@/store/notificationsStore.js";

export default function NotificationDropdown() {
  const navigate = useNavigate();
  const { notifications, fetchNotifications, markAsRead, markAllAsRead } =
    useNotificationStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   fetchNotifications();
    // }, 1_000_000_000);
    fetchNotifications();

    // return () => clearInterval(interval);
  }, []);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleClick = async (n: any) => {
    if (!n.isRead) await markAsRead(n._id);
    navigate("/dashboard/complaints");
  };

  const handleMarkAll = async () => {
    await markAllAsRead();
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="relative p-2">
          <BellIcon className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          Notifications
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-blue-500 hover:underline"
              onClick={handleMarkAll}
            >
              <CheckCheckIcon className="w-4 h-4 mr-1" /> Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="max-h-96">
          {notifications.length === 0 ? (
            <DropdownMenuItem disabled>No notifications</DropdownMenuItem>
          ) : (
            notifications.map((n) => (
              <DropdownMenuItem
                key={n._id}
                className={`flex flex-col items-start gap-1 cursor-pointer ${
                  n.isRead ? "opacity-70" : ""
                }`}
                onClick={() => handleClick(n)}
              >
                <span className="text-sm">{n.message}</span>
                <span className="text-xs text-gray-400">
                  {formatDistanceToNow(new Date(n.createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </DropdownMenuItem>
            ))
          )}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

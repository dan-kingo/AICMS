import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import EditProfileForm from "@/components/EditProfileForm";
import ChangePassword from "./ChangePassword";
import { useTheme } from "@/components/theme-provider";

const Settings = () => {
  const { setTheme, theme } = useTheme();

  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  return (
    <div className=" lg:mx-auto lg:p-6">
      <h1 className="text-2xl font-semibold mb-6">Settings & Privacy</h1>

      {/* Profile Settings */}
      <Card className="mb-6 dark:bg-dark">
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <EditProfileForm />
        </CardContent>
      </Card>

      {/* change Password  */}

      <Card className="mb-6 dark:bg-dark">
        <CardHeader>
          <CardTitle>Change Password Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <ChangePassword />
        </CardContent>
      </Card>
      {/* Privacy Settings */}
      <Card className="mb-6 dark:bg-dark">
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <Label>Dark Mode</Label>
            <Switch
              className="cursor-pointer"
              checked={theme === "dark"}
              onCheckedChange={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
            />
          </div>

          <div className="flex justify-between items-center">
            <Label>Enable Two-Factor Authentication</Label>
            <Switch
              className="cursor-pointer"
              checked={is2FAEnabled}
              onCheckedChange={setIs2FAEnabled}
            />
          </div>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card className="dark:bg-dark">
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="destructive" className="w-full">
            Delete Account
          </Button>
          <Button variant="secondary" className="w-full text-white ">
            Log Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import DarkModeToggle from "@/components/DarkModeToggle";
import { Switch } from "@/components/ui/switch";
import EditProfileForm from "@/components/EditProfileForm";
import ChangePassword from "./ChangePassword";

interface SettingsForm {
  name: string;
  email: string;
  password: string;
}

const Settings = () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsForm>();

  const onSubmit = (data: SettingsForm) => {
    console.log("Updated Settings:", data);
  };

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
      {/* <Card className="mb-6 dark:bg-dark">
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <Label>Dark Mode</Label>
            <DarkModeToggle />
          </div>

          <div className="flex justify-between items-center">
            <Label>Enable Two-Factor Authentication</Label>
            <Switch checked={is2FAEnabled} onCheckedChange={setIs2FAEnabled} />
          </div>
        </CardContent>
      </Card> */}

      {/* Account Actions */}
      {/* <Card className="dark:bg-dark">
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="destructive" className="w-full">
            Delete Account
          </Button>
          <Button variant="secondary" className="w-full">
            Log Out
          </Button>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default Settings;

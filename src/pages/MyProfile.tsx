import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function MyProfile() {
  return (
    <main className="w-2/3 flex flex-col m-5 gap-5">
      <div className="flex flex-col gap-3">
        <p>My Information</p>
        <Card className="flex items-center flex-col">
          <Input
            className="w-9/10 border-b border-none"
            placeholder="Input Name"
          />
          <Input
            className="w-9/10 border-b border-none"
            placeholder="example@mail.com"
            disabled
          />
        </Card>
        <Button className="w-30 cursor-pointer">Save Changes</Button>
      </div>

      <Card className="p-3">
        <p className="font-bold font">Delete Account Forever</p>
        <p className="text-gray-600">
          Do you want to delete your Account & All your url
        </p>
        <Button className="cursor-pointer bg-white border-red-700 border-2 text-red-700 hover:bg-red-50">
          Delete account
        </Button>
      </Card>
    </main>
  );
}

export default MyProfile;

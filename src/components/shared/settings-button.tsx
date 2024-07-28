import { Button } from "@components/ui/button";
import CustomTooltip from "@components/ui/custom-tooltip";
import { Label } from "@components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover";
import { Switch } from "@components/ui/switch";
import { ThemeStore } from "@store/theme";
import { Moon, Palette, Rocket, Settings, Sun } from "lucide-react";

function SettingsButton() {
  const { setTheme, theme, useViewTransition, setViewTransition, isAviableTransition } = ThemeStore();
  return (
    <Popover>
      <CustomTooltip content="Settings" position="bottom">
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings className="size-5" />
          </Button>
        </PopoverTrigger>
      </CustomTooltip>
      <PopoverContent sideOffset={5} className="w-60 px-3">
        <p className="font-medium leading-none text-base pb-3 px-2">Settings</p>
        <div className="flex flex-col gap-y-2 ">
          <Button
            asChild
            className="hover:cursor-pointer bg-transparent px-2 py-1 h-8 select-none"
            variant="ghost"
            onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <Palette size={16} strokeWidth={2.3} className="shrink-0" />
                <span className="text-sm font-medium">Appearance</span>
              </div>
              <div className="flex items-center gap-x-1">
                {theme === "light" ? (
                  <>
                    <Sun size="18" />
                    <span className="font-medium">Light</span>
                  </>
                ) : (
                  <>
                    <Moon size="17" />
                    <span className="font-medium">Dark</span>
                  </>
                )}
              </div>
            </div>
          </Button>
          <Label
            htmlFor="viewTransitionState"
            className={`${
              isAviableTransition ? "hover:cursor-pointer hover:bg-accent hover:text-accent-foreground" : "hover:cursor-not-allowed text-gray-500"
            } px-2  group h-8 rounded-md py-1 transition-colors select-none overflow-hidden`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <Rocket size={16} strokeWidth={2.3} className="shrink-0" />
                <span className="text-sm font-medium">ViewTransition</span>
              </div>
              <Switch
                disabled={!isAviableTransition}
                checked={isAviableTransition ? useViewTransition : false}
                onCheckedChange={() => setViewTransition(!useViewTransition)}
                id="viewTransitionState"
                thumbClassName="data-[state=checked]:translate-x-4 
                data-[state=checked]:bg-eye-dark 
                dark:data-[state=checked]:bg-eye-light 
                data-[state=unchecked]:bg-eye-off-dark
                dark:data-[state=unchecked]:bg-eye-off-light
                bg-no-repeat bg-center 
                bg-[length:13px_13px]"
                className="w-10"
              />
            </div>
          </Label>
          {!isAviableTransition && <small className="text-[10px] text-muted-foreground px-2">Browser doesn&apos;t support viewTransition</small>}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default SettingsButton;

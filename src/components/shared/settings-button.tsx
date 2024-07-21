import { Button } from "@components/ui/button";
import CustomTooltip from "@components/ui/custom-tooltip";
import { Label } from "@components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover";
import { Switch } from "@components/ui/switch";
import { useThemeStore } from "@context/use-theme";
import { Moon, Palette, Rocket, Settings, Sun } from "lucide-react";

function SettingsButton() {
  const { setTheme, theme, useViewTransition, setViewTransition } = useThemeStore();

  return (
    <Popover>
      <CustomTooltip content="Settings" position="bottom">
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings className="size-5" />
          </Button>
        </PopoverTrigger>
      </CustomTooltip>
      <PopoverContent sideOffset={5} className="w-60">
        <p className="font-medium leading-none text-base pb-3 px-2">Settings</p>
        <div className="flex flex-col gap-y-2">
          <Button asChild className="hover:cursor-pointer bg-transparent px-2 py-1 h-8" variant="ghost" onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <div>
                  <Palette size={16} strokeWidth={2.3} />
                </div>
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
          <Label htmlFor="viewTransitionState" className="hover:cursor-pointer px-2 hover:bg-accent hover:text-accent-foreground group h-8 rounded-md py-1 transition-colors">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <div>
                  <Rocket size={16} strokeWidth={2.3} />
                </div>
                <span className="text-sm font-medium">ViewTransition</span>
              </div>
              <Switch
                checked={useViewTransition}
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
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default SettingsButton;

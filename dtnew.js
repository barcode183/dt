UI.AddCheckbox(["Rage", "Exploits", "General"], "lethal dt")
UI.AddCheckbox(["Rage", "Exploits", "General"], "dt speed")
Cheat.PrintChat("packer dt>all" + "\n");
var target, dtdmg, startingdmg, shitape, enemy, hh;
function mindmg(){
   
    enemy = Ragebot.GetTarget()
    startingdmg = Entity.GetProp(enemy, "CCSPlayer", "m_iHealth")
   
    dtdmg = startingdmg / 2
    shitape = UI.GetValue( ["Rage", "Exploits", "General", "lethal dt"])
    if (shitape == 1){
    UI.SetValue(["Rage", "Target", "SCAR20", "Minimum damage"], dtdmg)
    UI.SetValue(["Rage", "Target", "G3SG1", "Minimum damage"], dtdmg)
    }
}
function speed(){//this shit pasted from brightside
    hh = UI.GetValue(["Rage", "Exploits", "General", "dt speed"])
    if (hh == 1)
        var exploitCharge = Exploit.GetCharge();

        Exploit[(1 != exploitCharge ? "Enable" : "Disable") + "Recharge"](), Convar.SetInt("cl_clock_correction", 0), Convar.SetInt("sv_maxusrcmdprocessticks", 18), Exploit.OverrideShift(16),
            Exploit.OverrideTolerance(0), canShiftShot(18) && 1 != exploitCharge && (Exploit.DisableRecharge(), Exploit.Recharge())
    }
Cheat.RegisterCallback("CreateMove", "mindmg", "speed")

-- Gui to Lua
-- Version: 3.2

-- Instances:

local ScreenGui = Instance.new("ScreenGui")
local Frame = Instance.new("Frame")
local UICorner = Instance.new("UICorner")
local Frame_2 = Instance.new("Frame")
local UICorner_2 = Instance.new("UICorner")
local Frame_3 = Instance.new("Frame")
local UICorner_3 = Instance.new("UICorner")
local TextLabel = Instance.new("TextLabel")
local Frame_4 = Instance.new("Frame")
local UICorner_4 = Instance.new("UICorner")
local TextButton = Instance.new("TextButton")
local TextButton_2 = Instance.new("TextButton")
local TextButton_3 = Instance.new("TextButton")
local TextButton_4 = Instance.new("TextButton")
local TextButton_5 = Instance.new("TextButton")
local Frame_5 = Instance.new("Frame")
local UICorner_5 = Instance.new("UICorner")
local ScrollingFrame = Instance.new("ScrollingFrame")
local Ignore = Instance.new("Frame")
local UICorner_6 = Instance.new("UICorner")
local UIListLayout = Instance.new("UIListLayout")
local Frame_6 = Instance.new("Frame")
local UICorner_7 = Instance.new("UICorner")
local Frame_7 = Instance.new("Frame")
local UICorner_8 = Instance.new("UICorner")
local Frame_8 = Instance.new("Frame")
local UICorner_9 = Instance.new("UICorner")
local Frame_9 = Instance.new("Frame")
local UICorner_10 = Instance.new("UICorner")
local Til = Instance.new("Frame")
local UICorner_11 = Instance.new("UICorner")
local Tab = Instance.new("TextLabel")
local TextLabel_2 = Instance.new("TextLabel")

--Properties:

ScreenGui.Parent = game.Players.LocalPlayer:WaitForChild("PlayerGui")
ScreenGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling

Frame.Parent = ScreenGui
Frame.BackgroundColor3 = Color3.fromRGB(59, 59, 59)
Frame.BorderSizePixel = 0
Frame.Position = UDim2.new(0.269503534, 0, 0.245901644, 0)
Frame.Size = UDim2.new(0.459712744, 0, 0.506072462, 0)

UICorner.CornerRadius = UDim.new(0.00999999978, 0)
UICorner.Parent = Frame

Frame_2.Parent = Frame
Frame_2.BackgroundColor3 = Color3.fromRGB(42, 42, 42)
Frame_2.BorderSizePixel = 0
Frame_2.Position = UDim2.new(0.0106650703, 0, 0.0968917981, 0)
Frame_2.Size = UDim2.new(0.27458325, 0, 0.865639865, 0)

UICorner_2.CornerRadius = UDim.new(0.00999999978, 0)
UICorner_2.Parent = Frame_2

Frame_3.Parent = Frame_2
Frame_3.BackgroundColor3 = Color3.fromRGB(255, 38, 0)
Frame_3.BackgroundTransparency = 1.000
Frame_3.BorderSizePixel = 0
Frame_3.Position = UDim2.new(0, 0, 0.0170911644, 0)
Frame_3.Size = UDim2.new(0.999999881, 0, 0.0680000037, 0)

UICorner_3.CornerRadius = UDim.new(0.100000001, 0)
UICorner_3.Parent = Frame_3

TextLabel.Parent = Frame_3
TextLabel.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel.BackgroundTransparency = 1.000
TextLabel.Size = UDim2.new(1, 0, 1, 0)
TextLabel.Font = Enum.Font.GothamBold
TextLabel.Text = "Bee Swarm Simulator"
TextLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
TextLabel.TextScaled = true
TextLabel.TextSize = 20.000
TextLabel.TextWrapped = true
TextLabel.TextXAlignment = Enum.TextXAlignment.Left

Frame_4.Parent = Frame_2
Frame_4.BackgroundColor3 = Color3.fromRGB(255, 38, 0)
Frame_4.BackgroundTransparency = 1.000
Frame_4.BorderSizePixel = 0
Frame_4.Position = UDim2.new(0, 0, 0.0170911644, 0)
Frame_4.Size = UDim2.new(0.999999881, 0, 0.0680000037, 0)

UICorner_4.CornerRadius = UDim.new(0.100000001, 0)
UICorner_4.Parent = Frame_4

TextButton.Parent = Frame_4
TextButton.AnchorPoint = Vector2.new(0.5, 0.5)
TextButton.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextButton.BackgroundTransparency = 1.000
TextButton.Position = UDim2.new(0.542722702, 0, 2.20128322, 0)
TextButton.Size = UDim2.new(0.912999988, 0, 1, 0)
TextButton.Font = Enum.Font.GothamBold
TextButton.Text = "Main"
TextButton.TextColor3 = Color3.fromRGB(255, 255, 255)
TextButton.TextSize = 17.000
TextButton.TextXAlignment = Enum.TextXAlignment.Left

TextButton_2.Parent = Frame_4
TextButton_2.AnchorPoint = Vector2.new(0.5, 0.5)
TextButton_2.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextButton_2.BackgroundTransparency = 1.000
TextButton_2.Position = UDim2.new(0.542722702, 0, 3.85222816, 0)
TextButton_2.Size = UDim2.new(0.912999988, 0, 1, 0)
TextButton_2.Font = Enum.Font.GothamBold
TextButton_2.Text = "Farm"
TextButton_2.TextColor3 = Color3.fromRGB(255, 255, 255)
TextButton_2.TextSize = 17.000
TextButton_2.TextXAlignment = Enum.TextXAlignment.Left

TextButton_3.Parent = Frame_4
TextButton_3.AnchorPoint = Vector2.new(0.5, 0.5)
TextButton_3.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextButton_3.BackgroundTransparency = 1.000
TextButton_3.Position = UDim2.new(0.542722702, 0, 5.50317287, 0)
TextButton_3.Size = UDim2.new(0.912999988, 0, 1, 0)
TextButton_3.Font = Enum.Font.GothamBold
TextButton_3.Text = "Planter"
TextButton_3.TextColor3 = Color3.fromRGB(255, 255, 255)
TextButton_3.TextSize = 17.000
TextButton_3.TextXAlignment = Enum.TextXAlignment.Left

TextButton_4.Parent = Frame_4
TextButton_4.AnchorPoint = Vector2.new(0.5, 0.5)
TextButton_4.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextButton_4.BackgroundTransparency = 1.000
TextButton_4.Position = UDim2.new(0.542722702, 0, 7.04405451, 0)
TextButton_4.Size = UDim2.new(0.912999988, 0, 1, 0)
TextButton_4.Font = Enum.Font.GothamBold
TextButton_4.Text = "Local Player"
TextButton_4.TextColor3 = Color3.fromRGB(255, 255, 255)
TextButton_4.TextSize = 17.000
TextButton_4.TextXAlignment = Enum.TextXAlignment.Left

TextButton_5.Parent = Frame_4
TextButton_5.AnchorPoint = Vector2.new(0.5, 0.5)
TextButton_5.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextButton_5.BackgroundTransparency = 1.000
TextButton_5.Position = UDim2.new(0.542722702, 0, 8.80506229, 0)
TextButton_5.Size = UDim2.new(0.912999988, 0, 1, 0)
TextButton_5.Font = Enum.Font.GothamBold
TextButton_5.Text = "Setting"
TextButton_5.TextColor3 = Color3.fromRGB(255, 255, 255)
TextButton_5.TextSize = 17.000
TextButton_5.TextXAlignment = Enum.TextXAlignment.Left

Frame_5.Parent = Frame_4
Frame_5.AnchorPoint = Vector2.new(0.5, 0.5)
Frame_5.BackgroundColor3 = Color3.fromRGB(211, 255, 249)
Frame_5.Position = UDim2.new(0.0374566615, 0, 2.20099998, 0)
Frame_5.Size = UDim2.new(0.0441016294, 0, 1.42817008, 0)

UICorner_5.Parent = Frame_5

ScrollingFrame.Parent = Frame
ScrollingFrame.Active = true
ScrollingFrame.BackgroundColor3 = Color3.fromRGB(59, 59, 59)
ScrollingFrame.BorderSizePixel = 0
ScrollingFrame.Position = UDim2.new(0.298264146, 0, 0.187593415, 0)
ScrollingFrame.Size = UDim2.new(0, 403, 0, 239)
ScrollingFrame.ScrollBarThickness = 5

Ignore.Name = "Ignore"
Ignore.Parent = ScrollingFrame
Ignore.BackgroundColor3 = Color3.fromRGB(42, 42, 42)
Ignore.BackgroundTransparency = 1.000
Ignore.BorderSizePixel = 0
Ignore.Position = UDim2.new(0.0190137643, 0, 1.27688608e-07, 0)
Ignore.Size = UDim2.new(0.961972415, 0, 0.00249999994, 0)

UICorner_6.CornerRadius = UDim.new(0.00999999978, 0)
UICorner_6.Parent = Ignore

UIListLayout.Parent = ScrollingFrame
UIListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Center
UIListLayout.SortOrder = Enum.SortOrder.LayoutOrder
UIListLayout.Padding = UDim.new(0.00999999978, 0)

Frame_6.Parent = ScrollingFrame
Frame_6.BackgroundColor3 = Color3.fromRGB(42, 42, 42)
Frame_6.BorderSizePixel = 0
Frame_6.Position = UDim2.new(0, 0, -0.00161954574, 0)
Frame_6.Size = UDim2.new(0.949999988, 0, 0.0680000037, 0)

UICorner_7.CornerRadius = UDim.new(0.100000001, 0)
UICorner_7.Parent = Frame_6

Frame_7.Parent = ScrollingFrame
Frame_7.BackgroundColor3 = Color3.fromRGB(42, 42, 42)
Frame_7.BorderSizePixel = 0
Frame_7.Position = UDim2.new(0, 0, -0.00161954574, 0)
Frame_7.Size = UDim2.new(0.949999988, 0, 0.0680000037, 0)

UICorner_8.CornerRadius = UDim.new(0.100000001, 0)
UICorner_8.Parent = Frame_7

Frame_8.Parent = ScrollingFrame
Frame_8.BackgroundColor3 = Color3.fromRGB(42, 42, 42)
Frame_8.BorderSizePixel = 0
Frame_8.Position = UDim2.new(0, 0, -0.00161954574, 0)
Frame_8.Size = UDim2.new(0.949999988, 0, 0.0680000037, 0)

UICorner_9.CornerRadius = UDim.new(0.100000001, 0)
UICorner_9.Parent = Frame_8

Frame_9.Parent = ScrollingFrame
Frame_9.BackgroundColor3 = Color3.fromRGB(42, 42, 42)
Frame_9.BorderSizePixel = 0
Frame_9.Position = UDim2.new(0, 0, -0.00161954574, 0)
Frame_9.Size = UDim2.new(0.949999988, 0, 0.0680000037, 0)

UICorner_10.CornerRadius = UDim.new(0.100000001, 0)
UICorner_10.Parent = Frame_9

Til.Name = "Til"
Til.Parent = Frame
Til.BackgroundColor3 = Color3.fromRGB(42, 42, 42)
Til.BorderSizePixel = 0
Til.Position = UDim2.new(0.310643405, 0, 0.0968917981, 0)
Til.Size = UDim2.new(0.678428113, 0, 0.0907016173, 0)

UICorner_11.CornerRadius = UDim.new(0.00999999978, 0)
UICorner_11.Parent = Til

Tab.Name = "Tab"
Tab.Parent = Til
Tab.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
Tab.BackgroundTransparency = 1.000
Tab.Size = UDim2.new(1, 0, 1, 0)
Tab.Font = Enum.Font.GothamBold
Tab.Text = "Main Tab"
Tab.TextColor3 = Color3.fromRGB(255, 255, 255)
Tab.TextSize = 20.000
Tab.TextWrapped = true
Tab.TextXAlignment = Enum.TextXAlignment.Left

TextLabel_2.Parent = Til
TextLabel_2.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_2.BackgroundTransparency = 1.000
TextLabel_2.Position = UDim2.new(-0.442166716, 0, -1.00000107, 0)
TextLabel_2.Size = UDim2.new(1.45827532, 0, 1, 0)
TextLabel_2.Font = Enum.Font.GothamBold
TextLabel_2.Text = "PunnatWat Hub Premium"
TextLabel_2.TextColor3 = Color3.fromRGB(171, 219, 255)
TextLabel_2.TextSize = 20.000
TextLabel_2.TextWrapped = true
TextLabel_2.TextXAlignment = Enum.TextXAlignment.Left

-- Scripts:

local function KLMDM_fake_script() -- Frame_4.LocalScript 
	local script = Instance.new('LocalScript', Frame_4)

	local Tween = game:GetService("TweenService")
	
	
	for _,But in pairs(script.Parent:GetChildren()) do
		if But:IsA("TextButton") then
			But.MouseButton1Click:Connect(function()
				local Goal = {}
				Goal.Position = UDim2.new(0.037,0,But.Position.Y.Scale,0)
				script.Parent.Frame:TweenPosition(UDim2.new(0.037,0,But.Position.Y.Scale,0),Enum.EasingDirection.Out,Enum.EasingStyle.Quart,0.5,true)
				script.Parent.Parent.Parent.Til.Tab.Text = But.Text.." Tab"	
			end)
		end
	end
	
	
end
coroutine.wrap(KLMDM_fake_script)()
local function CKGW_fake_script() -- ScreenGui.LocalScript 
	local script = Instance.new('LocalScript', ScreenGui)

	task.wait(10)
	script.Parent:Destroy()
end
coroutine.wrap(CKGW_fake_script)()

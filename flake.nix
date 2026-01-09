{
  description = "Culturae website development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      systems = [ 
        "x86_64-linux" 
        "aarch64-linux" 
        "x86_64-darwin" 
        "aarch64-darwin" 
        ];
      forAllSystems = nixpkgs.lib.genAttrs systems;
    in
    {
      devShells = forAllSystems (system: {
        default = nixpkgs.legacyPackages.${system}.mkShell {
          buildInputs = with nixpkgs.legacyPackages.${system}; [
            nodejs_24
            yarn
          ];
        };
      });
    };
}

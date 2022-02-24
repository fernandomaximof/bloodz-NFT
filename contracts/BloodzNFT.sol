// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/PullPayment.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract BloodzNFT is ERC721, PullPayment, Ownable {
  using Counters for Counters.Counter;

  // Constants
  uint256 public constant TOTAL_SUPPLY = 10_000;
  //uint256 public constant MINT_PRICE = 0.08 ether;

  Counters.Counter private currentTokenId;

  /// @dev Base token URI used as a prefix by tokenURI().
  string public baseTokenURI;

  constructor() ERC721("BloodzNFT", "BLDZ") {
    baseTokenURI = "";
  }

  function mintTo(address recipient) public payable onlyOwner returns (uint256) {
    uint256 tokenId = currentTokenId.current();
    require(tokenId < TOTAL_SUPPLY, "MAX SUPPLY REACHED");
    //require(msg.value == MINT_PRICE, "TRANSACTION VALUE DID NOT EQUAL THE MINT PRICE");

    currentTokenId.increment();
    uint256 newItemId = currentTokenId.current();
    //_safeMint(recipient, newItemId);
    _mint(recipient, newItemId);
    return newItemId;
  }

  /// @dev Returns an URI for a given token ID
  function _baseURI() internal view virtual override returns (string memory) {
    return baseTokenURI;
  }

  /// @dev Sets the base token URI prefix.
  function setBaseTokenURI(string memory _baseTokenURI) public onlyOwner {
    baseTokenURI = _baseTokenURI;
  }

  /// @dev Overridden in order to make it an onlyOwner function
  function withdrawPayments(address payable payee) public override onlyOwner virtual {
    super.withdrawPayments(payee);
  }

  function destroyContract() public onlyOwner{
    selfdestruct(payable(msg.sender));
  }
}
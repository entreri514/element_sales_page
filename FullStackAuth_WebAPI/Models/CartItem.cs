using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FullStackAuth_WebAPI.Models
{
    public class CartItem
    {
        [Key]
        public int Id { get; set; }
        
        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public Product Product { get; set; }


        [ForeignKey("User")]
        public string UserId { get; set; }
        public User User { get; set; }


        public bool OrderComplete { get; set; }
    }
}

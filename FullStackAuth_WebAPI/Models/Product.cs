using System.ComponentModel.DataAnnotations;

namespace FullStackAuth_WebAPI.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        public int AtomicNumber { get; set; }

        public string ItemPic { get; set; }

        public double Price { get; set; }

        public string Description { get; set; }

        public string ProductInfo { get; set; }

        public string ProductCare { get; set; }

        public string ItemType { get; set; }
        
    }
}
